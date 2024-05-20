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
    const [showDatePicker, setShowDatePicker] = useState(false);

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

    const handleDateChange = (event, date) => {
        if (date) {
            setSelectedDate(date);
        }
        setShowDatePicker(false);
    };

    const showDatePickerHandler = () => {
        setShowDatePicker(true);
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

        // Remove any undefined fields from activityData
        Object.keys(activityData).forEach(key => {
            if (activityData[key] === undefined) {
                delete activityData[key];
            }
        });

        try {
            // Save to calendar collection
            const calendarDocRef = await addDoc(collection(db, "calendar"), activityData);

            // Save to user's subcollection with linkedActivityId
            const userId = auth.currentUser.uid;
            const userActivityRef = doc(collection(db, `users/${userId}/activities`));
            await setDoc(userActivityRef, {
                ...activityData,
                linkedActivityId: calendarDocRef.id
            });

            // Save to each friend's subcollection
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
                <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator} />
            </GradientScreen>
        );
    }

    if (error) {
        return (
            <GradientScreen>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Error: {error.message}</Text>
                </View>
            </GradientScreen>
        );
    }

    if (activities.length === 0 && !loading) {
        return (
            <GradientScreen>
                <View style={styles.noResultsContainer}>
                    <Text style={styles.noResultsText}>No activities found with the selected filters.</Text>
                </View>
            </GradientScreen>
        );
    }

    return (
        <GradientScreen style={styles.gradientScreen}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.container}>
                    {activities.map((activity) => (
                        <TouchableOpacity
                            key={activity.id}
                            style={styles.activityContainer}
                            onPress={() => toggleExpand(activity.id)}
                        >
                            <Text style={styles.title}>{activity.Name}</Text>
                            <Text style={styles.textTop}>Sted: {activity.Location}</Text>
                            <Text style={styles.textTop}>Deltager: {numericPeople} people</Text>
                            <Text style={styles.textTop}>Pris: {activity.totalPrice} kr</Text>
                            {expandedId === activity.id && (
                                <View style={styles.details}>
                                    <Text style={styles.textCont}>Price per Person: {activity.Price} kr</Text>
                                    <Text style={styles.textCont}>Mulige Deltagere: {activity.MinP} to {activity.MaxP}</Text>
                                    <Text style={styles.textCont2}>{activity.Description}</Text>
                                    <Text style={styles.textLink}>{activity.WhatYouNeed}</Text>

                                    <TouchableOpacity
                                        style={styles.addButton}
                                        onPress={() => openModalWithActivityDetails(activity)}
                                    >
                                        <Text style={styles.addButtonText}>Legg til</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Legg til Aktivitet</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Aktivitetsnavn"
                            value={activityName}
                            onChangeText={setActivityName}
                        />
                        <View style={styles.rowContainer}>
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
                                style={styles.date}
                            />

                        </View>

                        <TextInput
                            style={styles.textArea}
                            placeholder="Beskrivelse"
                            multiline
                            numberOfLines={4}
                            value={description}
                            onChangeText={setDescription}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={handleAddActivity}>
                                <Text style={styles.buttonText}>Legg til</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Avbryt</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default Activities;