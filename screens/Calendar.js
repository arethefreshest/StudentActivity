import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import GradientScreen from '../components/GradientScreen';
import { db } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { styles } from '../styles';

export default function CalendarScreen({ navigation, route }) {
    const [markedDates, setMarkedDates] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [activityDetails, setActivityDetails] = useState([]);

    useEffect(() => {
        fetchActivities();
    }, []);

    useEffect(() => {
        if (route.params?.newActivityAdded) {
            fetchActivities();
        }
    }, [route.params?.newActivityAdded]);

    const fetchActivities = async () => {
        const activitiesCollection = collection(db, 'calendar');
        const activitiesSnapshot = await getDocs(activitiesCollection);
        const activitiesData = activitiesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const datesWithActivities = {};
        activitiesData.forEach(activity => {
            const date = activity.selectedDate.toDate().toISOString().split('T')[0];
            if (!datesWithActivities[date]) {
                datesWithActivities[date] = { marked: true, dotColor: 'red', activities: [] };
            }
            datesWithActivities[date].activities.push(activity);
        });

        setMarkedDates(datesWithActivities);
    };

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
        const activities = markedDates[day.dateString]?.activities || [];
        setActivityDetails(activities);
        setModalVisible(true);
    };

    return (
        <GradientScreen>
            <View style={styles.containerCalendar}>
                <Text style={styles.titleCalendar}>My Calendar</Text>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleDayPress}
                    monthFormat={'yyyy MM'}
                    hideExtraDays={true}
                    firstDay={1}
                    hideDayNames={false}
                    showWeekNumbers={true}
                    style={styles.CalendarStyle}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlayCalendar}>
                        <View style={styles.modalContainerCalendar}>
                            <Text style={styles.modalTitleCalendar}>{selectedDate}</Text>
                            {activityDetails && activityDetails.length > 0 ? (
                                activityDetails.map((activity, index) => (
                                    <View key={index}>
                                        <Text style={styles.modalTextCalendar}>Activity: {activity.activityName}</Text>
                                        <Text style={styles.modalTextCalendar}>Description: {activity.description}</Text>
                                        <Text style={styles.modalTextCalendar}>Friends: {activity.selectedFriends.join(', ')}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text style={styles.modalTextCalendar}>No activities planned</Text>
                            )}
                            <TouchableOpacity
                                style={styles.modalCloseButtonCalendar}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.modalTextCalendar}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </GradientScreen>
    );
}