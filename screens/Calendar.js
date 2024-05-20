import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import GradientScreen from '../components/ui/GradientScreen';
import {auth, db} from '../firebase/FirebaseConfig';
import {collection, doc, getDoc, getDocs, onSnapshot} from 'firebase/firestore';
import { styles } from '../styles';

export default function CalendarScreen({ navigation, route }) {
    const [markedDates, setMarkedDates] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [activityDetails, setActivityDetails] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchActivities();
        return () => unsubscribe && unsubscribe();
    }, []);

    useEffect(() => {
        if (route.params?.newActivity) {
            fetchActivities();
        }
    }, [route.params?.newActivity]);

    const fetchActivities = () => {
        const userId = auth.currentUser.uid;
        const userActivitiesRef = collection(db, `users/${userId}/activities`);

        const unsubscribe = onSnapshot(userActivitiesRef, async (querySnapshot) => {
            const userActivities = [];

            for (const docSnap of querySnapshot.docs) {
                const activityData = docSnap.data();
                if (activityData.linkedActivityId) {
                    const activityRef = doc(db, `calendar/${activityData.linkedActivityId}`);
                    const activityDoc = await getDoc(activityRef);
                    if (activityDoc.exists()) {
                        const activity = activityDoc.data();
                        if (activity.selectedDate) {
                            userActivities.push({
                                ...activity,
                                data: activityData.data,
                                time: activityData.time,
                                participants: activityData.participants
                            });
                        }
                    }
                } else {
                    if (activityData.selectedDate) {
                        userActivities.push(activityData);
                    }
                }
            }

            const datesWithActivities = {};
            userActivities.forEach(activity => {
                const date = activity.selectedDate.toDate().toISOString().split('T')[0];
                if (!datesWithActivities[date]) {
                    datesWithActivities[date] = { marked: true, dotColor: 'red', activities: [] };
                }
                datesWithActivities[date].activities.push(activity);
            });

            setMarkedDates(datesWithActivities);
        });

        return unsubscribe;
    };

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
        const activities = markedDates[day.dateString]?.activities || [];
        setActivityDetails(activities);
        setModalVisible(true);
    };

    return (
        <GradientScreen>
            <View style={styles.calendarContainer}>
                <Text style={styles.calendarTitle}>My Calendar</Text>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleDayPress}
                    monthFormat={'yyyy MM'}
                    hideExtraDays={true}
                    firstDay={1}
                    hideDayNames={false}
                    showWeekNumbers={true}
                    style={styles.calendarStyle}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.calendarModalOverlay}>
                        <View style={styles.calendarModalContainer}>
                            <Text style={styles.calendarModalTitle}>{selectedDate}</Text>
                            {activityDetails && activityDetails.length > 0 ? (
                                activityDetails.map((activity, index) => (
                                    <View key={index}>
                                        <Text style={styles.calendarModalText}>Activity: {activity.activityName}</Text>
                                        <Text style={styles.calendarModalText}>Description: {activity.description}</Text>
                                        <Text style={styles.calendarModalText}>Friends: {activity.selectedFriends.map(friend => friend.fullName).join(', ')}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text style={styles.calendarModalText}>No activities planned</Text>
                            )}
                            <TouchableOpacity
                                style={styles.calendarModalCloseButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.calendarModalText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </GradientScreen>
    );
}