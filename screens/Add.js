import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import GradientScreen from "../components/GradientScreen";
import CustomPicker from '../components/CustomPicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { db } from '../FirebaseConfig';
import { addDoc, collection } from "firebase/firestore";
import { styles } from '../styles'; // Import styles from styles.js

const Add = () => {
    const [activityName, setActivityName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();

    const friendsList = [
        "Are Berntsen",
        "Storm Selvig",
        "Eivind Solberg",
        "Ole Sveinung Berget",
        "Tore Knudsen",
        "David Holt"
    ];

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

    const addActivity = async () => {
        const activityData = {
            activityName,
            selectedDate,
            selectedFriends,
            description,
        };
        try {
            await addDoc(collection(db, "Activities"), activityData);
            console.log("Activity added successfully");
            navigation.navigate('Activities', { activityName, selectedDate, selectedFriends, description });
        } catch (error) {
            console.error("Error adding activity: ", error);
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
                        <DateTimePicker
                            value={selectedDate}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                            style={styles.dateAdd}
                        />
                    </View>

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
                </View>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default Add;