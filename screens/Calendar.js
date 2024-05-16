import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import GradientScreen from '../components/GradientScreen';
import { db } from '../FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { useRoute } from '@react-navigation/native';
import {styles} from "../styles"
import DatePicker from "../screens/DatePicker";

export default function CalendarScreen({navigation}) {
    const [markedDates, setMarkedDates] = useState({});
    const route = useRoute();
    const selectedActivity = route.params?.selectedActivity;

    useEffect(() => {
        if (selectedActivity) {
            console.log(selectedActivity.Name);
            const activityDate = selectedActivity.date; // Assuming date is passed like this
            const newMarkedDates = {
                ...markedDates,
                [activityDate]: {selected: true, marked: true, selectedColor: 'blue'}
            };
            setMarkedDates(newMarkedDates);

            // Add the activity to Firestore
            addActivityToCalendar(selectedActivity.id, activityDate, ""); // Replace "current_user_id" with actual user ID
        }
    }, [selectedActivity]);

    const handleDayPress = (day) => {
        if (selectedActivity) {
            addActivityToCalendar(selectedActivity.id, day.dateString, "current_user_id"); // Replace "current_user_id" with actual user ID
        } else {
            Alert.alert('No activity selected', 'Please select an activity before choosing a date.');
        }
    };

    if (!selectedActivity) {
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
}


async function addActivityToCalendar(activityId, date, email) {
    try {
        await addDoc(collection(db, "UserActivities"), {
            email: email,
            activityId: activityId,
            date: date,
        });
        Alert.alert('Activity Added', `Activity added on ${date}`);
    } catch (error) {
        Alert.alert('Error', `Failed to add activity: ${error.message}`);
    }
}
