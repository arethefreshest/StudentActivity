import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, SafeAreaView, TextInput } from 'react-native';
import {collection, query, where, getDocs, addDoc, Timestamp, setDoc, doc} from "firebase/firestore";
import { db, auth } from '../../firebase/FirebaseConfig';
import GradientScreen from "../ui/GradientScreen";
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import CustomPicker from "../ui/CustomPicker";
import { styles } from '../../styles';
import { fetchFriendsAndRequests } from "../../firebase/FirebaseFunksjoner";

function Activities({ route, navigation }) {
    const { people, price, location } = route.params;
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedId, setExpandedId] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [activityName, setActivityName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const userId = auth.currentUser.uid;
                console.log("Fetching friends for user ID:", userId);
                const {friends} = await fetchFriendsAndRequests(userId);
                setFriendsList(friends.map(friend => ({id: friend.id, fullName: friend.fullName})));
            } catch (e) {
                console.error('Error fetching friends:', e);
            }
        };

        fetchFriends();
    }, []);

    const numericPeople = Number(people);
    const locQuery = location ? location.toLowerCase() : null;

    useEffect(() => {
        const numericPeople = Number(people); // Convert people to number
        const locQuery = location ? location.toLowerCase() : null; // Ensure location is in lower case
        const q = query(
            collection(db, "Activities"),
            where("MinP", "<=", numericPeople),
            where("MaxP", ">=", numericPeople),
            where("Location", "==", locQuery)
        );

        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const querySnapshot = await getDocs(q);
                const filteredActivities = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const totalPrice = data.Price * numericPeople;
                    if (totalPrice <= price) {
                        filteredActivities.push({ id: doc.id, ...data, totalPrice });
                    }
                });
                setActivities(filteredActivities);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [people, price, location]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };


    if (loading) {
        return (
            <GradientScreen>
                <ActivityIndicator size="large" color="#0000ff" style={{ top: 300 }} />
            </GradientScreen>
        );
    }

    const handleAddActivity = async () => {
        const activityData = {
            activityName,
            selectedDate: Timestamp.fromDate(selectedDate),
            selectedFriends: selectedFriends.map(friend => ({ id: friend.id, fullName: friend.fullName })),
            description,
            email: auth.currentUser.email,
        };

        Object.keys(activityData).forEach(key => {
            if (activityData[key] === undefined) {
                delete activityData[key];
            }
        });

        try {
            const calendarDocRef = await addDoc(collection(db, "calendar"), activityData);

            const userId = auth.currentUser.uid;
            const userActivityRef = doc(collection(db, `users/${userId}/activities`));
            await setDoc(userActivityRef, {
                ...activityData,
                linkedActivityId: calendarDocRef.id
            });

            for (const friend of selectedFriends) {
                const friendActivityRef = doc(collection(db, `users/${friend.id}/activities`));
                await setDoc(friendActivityRef, {
                    ...activityData,
                    linkedActivityId: calendarDocRef.id
                });
            }

            console.log("Activity added successfully");
            setModalVisible(false);
            setActivityName('');
            setSelectedDate(new Date());
            setDescription('');
            setSelectedFriends([]);
        } catch (error) {
            console.error("Error adding activity: ", error);
        }
    };

    const openModalWithActivityDetails = (activity) => {
        setActivityName(activity.Name);
        setDescription(activity.WhatYouNeed);
        setModalVisible(true);
    };

    if (loading) {
        return (
            <GradientScreen>
                <ActivityIndicator size="large" color="#0000ff" style={styles.activitiesActivityIndicator} />
            </GradientScreen>
        );
    }

    if (error) {
        return (
            <GradientScreen>
                <View style={styles.activitiesErrorContainer}>
                    <Text style={styles.activitiesErrorText}>Error: {error.message}</Text>
                </View>
            </GradientScreen>
        );
    }

    if (activities.length === 0 && !loading) {
        return (
            <GradientScreen>
                <View style={styles.activitiesNoResultsContainer}>
                    <Text style={styles.activitiesNoResultsText}>No activities found with the selected filters.</Text>
                </View>
            </GradientScreen>
        );
    }

    return (
        <GradientScreen style={styles.activitiesGradientScreen}>
            <SafeAreaView style={styles.activitiesSafeArea}>
                <ScrollView contentContainerStyle={styles.activitiesContainer}>
                    {activities.map((activity) => (
                        <TouchableOpacity
                            key={activity.id}
                            style={styles.activitiesActivityContainer}
                            onPress={() => toggleExpand(activity.id)}
                        >
                            <Text style={styles.activitiesTitle}>{activity.Name}</Text>
                            <Text style={styles.activitiesTextTop}>Sted: {activity.Location}</Text>
                            <Text style={styles.activitiesTextTop}>Deltager: {numericPeople} people</Text>
                            <Text style={styles.activitiesTextTop}>Pris: {activity.totalPrice} kr</Text>
                            {expandedId === activity.id && (
                                <View style={styles.activitiesDetails}>
                                    <Text style={styles.activitiesTextCont}>Price per Person: {activity.Price} kr</Text>
                                    <Text style={styles.activitiesTextCont}>Mulige Deltagere: {activity.MinP} to {activity.MaxP}</Text>
                                    <Text style={styles.activitiesTextCont2}>{activity.Description}</Text>
                                    <Text style={styles.activitiesTextLink}>{activity.WhatYouNeed}</Text>

                                    <TouchableOpacity
                                        style={styles.activitiesAddButton}
                                        onPress={() => openModalWithActivityDetails(activity)}
                                    >
                                        <Text style={styles.activitiesAddButtonText}>Legg til</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.activitiesModalContent}>
                        <Text style={styles.activitiesModalTitle}>Legg til Aktivitet</Text>
                        <TextInput
                            style={styles.activitiesInput}
                            placeholder="Aktivitetsnavn"
                            value={activityName}
                            onChangeText={setActivityName}
                        />
                        <View style={styles.activitiesRowContainer}>
                            <CustomPicker
                                items={friendsList}
                                selectedItems={selectedFriends}
                                onSelect={(friend) => setSelectedFriends([...selectedFriends, friend])}
                                onRemove={(friend) => setSelectedFriends(selectedFriends.filter(f => f !== friend))}
                            />
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={(event, date) => date && setSelectedDate(date)}
                                style={styles.activitiesDate}
                            />
                        </View>

                        <TextInput
                            style={styles.activitiesTextArea}
                            placeholder="Beskrivelse"
                            multiline
                            numberOfLines={4}
                            value={description}
                            onChangeText={setDescription}
                        />
                        <View style={styles.activitiesButtonContainer}>
                            <TouchableOpacity style={styles.activitiesButton} onPress={handleAddActivity}>
                                <Text style={styles.activitiesButtonText}>Legg til</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.activitiesButton, styles.activitiesCancelButton]} onPress={() => setModalVisible(false)}>
                                <Text style={styles.activitiesButtonText}>Avbryt</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default Activities;