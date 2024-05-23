import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, TextInput, Alert, Platform, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import GradientScreen from "../components/ui/GradientScreen";
import CustomPicker from '../components/ui/CustomPicker';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { auth, db } from '../firebase/FirebaseConfig';
import { addDoc, collection, doc, Timestamp, setDoc } from "firebase/firestore";
import { styles } from '../styles';
import { fetchFriendsAndRequests } from "../firebase/FirebaseFunksjoner";

const Add = () => {
    const [activityName, setActivityName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);
    const [friendsList, setFriendsList] = useState([]);
    const [isAdded, setIsAdded] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

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

    useEffect(() => {
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
        if (date) {
            setSelectedDate(date);
            if (Platform.OS !== 'ios') {
                setShowDatePicker(false);
            }
        }
    };

    const addActivity = async () => {
        const activityData = {
            activityName,
            selectedDate: Timestamp.fromDate(selectedDate),
            selectedFriends,
            description,
            email: auth.currentUser.email,
            creator: {
                id: auth.currentUser.uid,
                fullName: auth.currentUser.displayName || auth.currentUser.email || 'Unknown' // Set a default value
            }
        };

        console.log('Adding activity with data:', activityData); // Log the activity data

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

            setIsAdded(true);
            setActivityName('');
            setSelectedDate(new Date());
            setDescription('');
            setSelectedFriends([]);
            Alert.alert("Success", "Activity added successfully");

        } catch (error) {
            console.error("Error adding activity: ", error);
            Alert.alert("Error", "There was an error adding the activity");
        }
    };

    return (
        <GradientScreen>
            <SafeAreaView style={styles.safeAreaAdd}>
                <ScrollView>
                <View style={styles.containerAdd}>
                    <Text style={styles.labelAdd}>Legg til:</Text>
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
                            style={styles.dateAdd}
                        />
                    )}

                    <TextInput
                        style={styles.textAreaAdd}
                        placeholder="Beskrivelse"
                        multiline
                        numberOfLines={4}
                        value={description}
                        onChangeText={setDescription}
                    />

                    <TouchableOpacity style={styles.buttonAdd} onPress={addActivity}>
                        <Text style={styles.buttonTextAdd}>Legg til</Text>
                    </TouchableOpacity>

                    {isAdded}
                </View>
                </ScrollView>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default Add;
