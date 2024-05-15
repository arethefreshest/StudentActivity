/*
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import GradientScreen from '../components/GradientScreen';
import { db } from '../FirebaseConfig';
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function CalendarScreen() {
    const [markedDates, setMarkedDates] = useState({});

    const route = useRoute();
    const selectedActivity = route.params?.selectedActivity;

    useEffect(() => {
        const q = query(collection(db, "UserActivities"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const activities = {};
            querySnapshot.forEach((doc) => {
                const { date } = doc.data();
                activities[date] = { marked: true, dotColor: 'blue', activeOpacity: 0.5 };
            });
            setMarkedDates(activities);
        });

        return () => unsubscribe();
    }, []);

    return (
        <GradientScreen>
            <View style={styles.container}>
                <Text style={styles.title}>My Calendar</Text>
                <Calendar
                    // Initially visible month. Default = now
                    curent={'now'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {
                        console.log('selected day', day);
                    }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If firstDay=1 week starts from Monday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={false}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => {
                        console.log('month changed', month);
                    }}
                />
            </View>
        </GradientScreen>
    );
}

const styles = StyleSheet.create({
    gradientScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});
*/

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import GradientScreen from '../components/GradientScreen';
import { db } from '../FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { useRoute } from '@react-navigation/native';

export default function CalendarScreen() {
    const [markedDates, setMarkedDates] = useState({});
    const route = useRoute();
    const selectedActivity = route.params?.selectedActivity;

    useEffect(() => {
        if (selectedActivity) {
            const activityDate = selectedActivity.date; // Assuming date is passed like this
            const newMarkedDates = {
                ...markedDates,
                [activityDate]: { selected: true, marked: true, selectedColor: 'blue' }
            };
            setMarkedDates(newMarkedDates);

            // Add the activity to Firestore
            addActivityToCalendar(selectedActivity.id, activityDate, "current_user_id"); // Replace "current_user_id" with actual user ID
        }
    }, [selectedActivity]);

    const handleDayPress = (day) => {
        if (selectedActivity) {
            addActivityToCalendar(selectedActivity.id, day.dateString, "current_user_id"); // Replace "current_user_id" with actual user ID
        } else {
            Alert.alert('No activity selected', 'Please select an activity before choosing a date.');
        }
    };

    return (
        <GradientScreen>
            <View style={styles.container}>
                <Text style={styles.title}>My Calendar</Text>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleDayPress}
                    monthFormat={'yyyy MM'}
                    hideExtraDays={true}
                    firstDay={1}
                    hideDayNames={false}
                    showWeekNumbers={true}
                />
            </View>
        </GradientScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

async function addActivityToCalendar(activityId, date, userId) {
    try {
        await addDoc(collection(db, "UserActivities"), {
            userId: userId,
            activityId: activityId,
            date: date,
        });
        Alert.alert('Activity Added', `Activity added on ${date}`);
    } catch (error) {
        Alert.alert('Error', `Failed to add activity: ${error.message}`);
    }
}
