import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, SafeAreaView, TextInput, Platform } from 'react-native';
import { collection, query, where, getDocs, addDoc, Timestamp, setDoc, doc } from "firebase/firestore";
import { db, auth } from '../../firebase/FirebaseConfig';
import GradientScreen from "../ui/GradientScreen";
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import CustomPicker from "../ui/CustomPicker";
import { styles } from '../../styles';
import { fetchFriendsAndRequests } from "../../firebase/FirebaseFunksjoner";
import { useFocusEffect } from '@react-navigation/native';

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

    const fetchFriends = async () => {
        try {
            const userId = auth.currentUser.uid;
            const { friends } = await fetchFriendsAndRequests(userId);
            setFriendsList(friends.map(friend => ({ id: friend.id, fullName: friend.fullName })));
        } catch (e) {
            console.error('Error fetching friends:', e);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchFriends();
        }, [])
    );

    const numericPeople = Number(people);
    const locQuery = location ? location.toLowerCase() : null;

    useEffect(() => {
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

    const handleAddActivity = async () => {
        const activityData = {
            activityName,
            selectedDate: Timestamp.fromDate(selectedDate),
            selectedFriends: selectedFriends.map(friend => ({ id: friend.id, fullName: friend.fullName })),
            description,
            email: auth.currentUser.email,
            creator: {
                id: auth.currentUser.uid,
                fullName: auth.currentUser.displayName || auth.currentUser.email || 'Unknown' // Set a default value
            }
        };

        console.log('Adding activity with data:', activityData); // Log the activity data

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

    const handleDateChange = (event, date) => {
        if (date) {
            setSelectedDate(date);
            if (Platform.OS !== 'ios') {
                setShowDatePicker(false);
            }
        }
    };

    if (loading) {
        return (
            <GradientScreen>
                <ActivityIndicator size="large" color="#0000ff" style={styles.IndicatorActivities} />
            </GradientScreen>
        );
    }

    if (error) {
        return (
            <GradientScreen>
                <View style={styles.errorContainerActivities}>
                    <Text style={styles.errorTextActivities}>Error: {error.message}</Text>
                </View>
            </GradientScreen>
        );
    }

    if (activities.length === 0 && !loading) {
        return (
            <GradientScreen>
                <View style={styles.noResultsContainerActivities}>
                    <Text style={styles.noResultsTextActivities}>No activities found with the selected filters.</Text>
                </View>
            </GradientScreen>
        );
    }

    return (
        <GradientScreen>
            <SafeAreaView style={styles.safeAreaActivities}>
                <ScrollView contentContainerStyle={styles.containerActivities}>
                    {activities.map((activity) => (
                        <TouchableOpacity
                            key={activity.id}
                            style={styles.containerActivity}
                            onPress={() => toggleExpand(activity.id)}
                        >
                            <Text style={styles.titleActivities}>{activity.Name}</Text>
                            <Text style={styles.textTopActivities}>Sted: {activity.Location}</Text>
                            <Text style={styles.textTopActivities}>Deltager: {numericPeople} people</Text>
                            <Text style={styles.textTopActivities}>Pris: {activity.totalPrice} kr</Text>
                            {expandedId === activity.id && (
                                <View style={styles.detailsActivities}>
                                    <Text style={styles.textContActivities}>Price per Person: {activity.Price} kr</Text>
                                    <Text style={styles.textContActivities}>Mulige Deltagere: {activity.MinP} to {activity.MaxP}</Text>
                                    <Text style={styles.textCont2Activities}>{activity.Description}</Text>
                                    <Text style={styles.textLinkActivities}>{activity.WhatYouNeed}</Text>
                                    {auth.currentUser && (
                                        <TouchableOpacity
                                            style={styles.addButtonActivities}
                                            onPress={() => openModalWithActivityDetails(activity)}
                                        >
                                            <Text style={styles.addButtonTextActivities}>Legg til</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ScrollView>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContentActivities}>
                        <Text style={styles.modalTitleActivities}>Legg til Aktivitet</Text>
                        <TextInput
                            style={styles.inputActivities}
                            placeholder="Aktivitetsnavn"
                            value={activityName}
                            onChangeText={setActivityName}
                        />
                        <View style={styles.rowContainerActivities}>
                            <CustomPicker
                                items={friendsList}
                                selectedItems={selectedFriends}
                                onSelect={(friend) => setSelectedFriends([...selectedFriends, friend])}
                                onRemove={(friend) => setSelectedFriends(selectedFriends.filter(f => f !== friend))}
                            />
                            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButtonAdd}>
                                <Text style={styles.dateButtonTextAdd}>Velg Dato</Text>
                            </TouchableOpacity>
                        </View>

                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}


                        <TextInput
                            style={styles.textAreaActivities}
                            placeholder="Beskrivelse"
                            multiline
                            numberOfLines={4}
                            value={description}
                            onChangeText={setDescription}
                        />

                        <View style={styles.buttonContainerActivities}>
                            <TouchableOpacity style={styles.buttonActivities} onPress={handleAddActivity}>
                                <Text style={styles.buttonTextActivities}>Legg til</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonActivities, styles.cancelButtonActivities]} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonTextActivities}>Avbryt</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                </ScrollView>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default Activities;