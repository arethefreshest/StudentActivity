import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Alert, Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import GradientScreen from "../components/GradientScreen";
import CustomPicker from '../components/CustomPicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { auth, db } from '../FirebaseConfig';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { styles } from '../styles';
import { fetchFriendsAndRequests } from "../FirebaseFunksjoner";
import { addActivity } from '../addActivity';

const Add = () => {
    const [activityName, setActivityName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);
    const [friendsList, setFriendsList] = useState([]);
    const [isAdded, setIsAdded] = useState(false);
    const [show, setShow] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const userId = auth.currentUser.uid;
                const { friends } = await fetchFriendsAndRequests(userId);
                setFriendsList(friends.map(friend => ({ id: friend.id, fullName: friend.fullName, email: friend.email })));
            } catch (e) {
                console.error('Error fetching friends:', e);
            }
        };
        fetchFriends();
    }, []);

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
        setShow(false);
        date && setSelectedDate(date);
    };

    const showDatePicker = () => {
        if (Platform.OS === 'android') {
            DateTimePickerAndroid.open({
                value: selectedDate,
                onChange: handleDateChange,
                mode: 'date',
                is24Hour: true,
            });
        } else {
            setShow(true);
        }
    };

    const handleAddActivity = async () => {
        const email = auth.currentUser.email;
        const activityData = {
            activityName,
            selectedDate: Timestamp.fromDate(selectedDate),
            selectedFriends,
            description,
            email,
        };
        const success = await addActivity(activityData);

        if (success) {
            Alert.alert("Success", "Activity added successfully");
            setActivityName('');
            setSelectedDate(new Date());
            setDescription('');
            setSelectedFriends([]);
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
                        <Button title="Select Date" onPress={showDatePicker} />
                        {Platform.OS === 'ios' && show && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                                style={styles.dateAdd}
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