import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import DateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import GradientScreen from "../components/GradientScreen";
import CustomPicker from '../components/CustomPicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import {auth, db} from '../FirebaseConfig';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { styles } from '../styles'; // Import styles from styles.js
import { fetchFriendsAndRequests } from "../FirebaseFunksjoner";
import { addActivity } from '../addActivity';
import Constants from "expo-constants";

const Add = () => {
    const [activityName, setActivityName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);
    const [friendsList, setFriendsList] = useState([]);
    const [isAdded, setIsAdded] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const userId = auth.currentUser.uid;
                console.log("Fetching friends for user ID:", userId);
                const { friends } = await fetchFriendsAndRequests(userId);
                setFriendsList(friends.map(friend => ({ id: friend.id, fullName: friend.fullName })));
            } catch (e) {
                console.error('Error fetching friends:', e);
            }
        };
        fetchFriends();
    }, []);


    useEffect(() => {
        console.log('Received route params:', route.params); // Debugging
        if (route.params) {
            if (route.params.activityName) {
                setActivityName(route.params.activityName);
            }
            if (route.params.description) {
                setDescription(route.params.description);
            }
        }
    }, [route.params]);

    const handleDateChange = (event, date) => {
        date && setSelectedDate(date);
    };

    const handleAddActivity = async () => {
        const email = auth.currentUser.email;
        const activityData = {
            activityName,
            selectedDate: Timestamp.fromDate(selectedDate),
            selectedFriends,
            description,
            email, // Add the user's email to the activity data
        };
        const success = await addActivity(activityData);

        if (success) {
            Alert.alert("Success", "Activity added successfully");

            // Clear the fields
            setActivityName('');
            setSelectedDate(new Date());
            setDescription('');
            setSelectedFriends([]);

            // Navigate back to the calendar screen and pass the parameter
            navigation.navigate('Calendar', { newActivityAdded: true });
        } else {
            Alert.alert("Error", "There was an error adding the activity");
        }
    };

    return (
        <GradientScreen style={styles.gradientScreen}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.containerAdd}>
                    <Text style={styles.label1}>Legg til:</Text>
                    <TextInput
                        style={styles.inputAdd}
                        placeholder="Aktivitetsnavn"
                        value={activityName}
                        onChangeText={setActivityName}
                    />

                    <View style={styles.rowContainerAdd}>
                        <CustomPicker
                            items={friendsList}
                            selectedItems={selectedFriends}
                            onSelect={(friend) => setSelectedFriends([...selectedFriends, friend])}
                            onRemove={(friend) => setSelectedFriends(selectedFriends.filter(f => f !== friend))}
                        />
                        {Constants.platform?.ios ? (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={(event, date) => date && setSelectedDate(date)}
                                style={styles.date}
                            />
                        ) : (
                            <DateTimePickerAndroid
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={(event, date) => date && setSelectedDate(date)}
                                style={styles.date}
                            />
                        )}
                    </View>

                    <TextInput
                        style={styles.textAreaAdd}
                        placeholder="Beskrivelse"
                        multiline
                        numberOfLines={4}
                        value={description}
                        onChangeText={setDescription}
                    />

                    <TouchableOpacity style={styles.buttonAdd} onPress={handleAddActivity}>
                        <Text style={styles.buttonTextAdd}>Legg til</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default Add;