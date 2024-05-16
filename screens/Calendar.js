import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import GradientScreen from '../components/GradientScreen';
import { db, auth } from '../FirebaseConfig';
import {collection, addDoc, query, where} from "firebase/firestore";
import { useRoute } from '@react-navigation/native';
import {styles} from "../styles"
import DatePicker from "../screens/DatePicker";

export default function CalendarScreen({navigation}) {
    const [markedDates, setMarkedDates] = useState({});
    const route = useRoute();
    const selectedActivity = route.params?.selectedActivity;
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

/*
    useEffect(() => {
        if (selectedActivity) {
            console.log(selectedActivity.Name);
            let activity = selectedActivity.Name;
            let date = selectedDate;

            const newMarkedDates = {
                ...markedDates,
                [date]: {selected: true, marked: true, selectedColor: 'blue'}
            };
            setMarkedDates(newMarkedDates);

            let email = auth.currentUser.email;

            addActivityToCalendar(activity, date, email);
        }
    }, [selectedActivity, selectedDate]);



    const handleDayPress = (day) => {
        if (selectedActivity) {
            addActivityToCalendar(activity, day.dateString, "current_user_id"); // Replace "current_user_id" with actual user ID
        } else {
            Alert.alert('No activity selected', 'Please select an activity before choosing a date.');
        }
    };

 */

    if (!selectedActivity) {
        return (
            <GradientScreen>
                <View style={styles.container}>
                    <Text style={styles.title}>My Calendar</Text>
                    <Calendar
                        markedDates={markedDates}
                        onDayPress={({ dateString }) => Alert.alert('Day Selected', dateString)}
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

   // return <DatePicker onDateSelected={setSelectedDate} />;
}


async function addActivityToCalendar(activity, date, email) {
    try {
        await addDoc(collection(db, "calendar"), {
            email: email,
            activity: activity,
            date: date,
        });
        Alert.alert('Activity Added', `Activity added on ${date}`);
    } catch (error) {
        Alert.alert('Error', `Failed to add activity: ${error.message}`);
    }
}
