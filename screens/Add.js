import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import GradientScreen from "../components/GradientScreen";

function Add({ navigation }) {
    const [activityName, setActivityName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [friends, setFriends] = useState([]);
    const [description, setDescription] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedFriends, setSelectedFriends] = useState([]);

    const friendsList = [
        "Are Berntsen",
        "Storm Selvig",
        "Eivind Solberg",
        "Ole Sveinung Berget",
        "Tore Knudsen",
        "David Holt"
    ];

    const handleDateChange = (event, date) => {
        date && setSelectedDate(date);
        setShowDatePicker(false);
    };

    const handleFriendChange = (itemValue, itemIndex) => {
        if (!selectedFriends.includes(itemValue)) {
            setSelectedFriends([...selectedFriends, itemValue]);
        }
    };

    const removeFriend = (friend) => {
        setSelectedFriends(selectedFriends.filter(f => f !== friend));
    };

    const addActivity = () => {
        console.log("Adding activity with:", { activityName, selectedDate, selectedFriends, description });
        navigation.navigate('Activities', { activityName, selectedDate, selectedFriends, description });
    };

    return (
        <GradientScreen style={styles.gradientScreen}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Aktivitetsnavn"
                        value={activityName}
                        onChangeText={setActivityName}
                    />

                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
                    </TouchableOpacity>

                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}

                    <Text style={styles.label}>Venner:</Text>
                    <Picker
                        selectedValue=""
                        onValueChange={handleFriendChange}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                    >
                        {friendsList.map((friend, index) => (
                            <Picker.Item key={index} label={friend} value={friend} />
                        ))}
                    </Picker>

                    <View style={styles.selectedFriends}>
                        {selectedFriends.map((friend, index) => (
                            <View key={index} style={styles.friendTag}>
                                <Text>{friend}</Text>
                                <Button title="X" onPress={() => removeFriend(friend)} />
                            </View>
                        ))}
                    </View>

                    <TextInput
                        style={styles.textArea}
                        placeholder="Beskrivelse"
                        multiline
                        numberOfLines={4}
                        value={description}
                        onChangeText={setDescription}
                    />

                    <TouchableOpacity style={styles.button} onPress={addActivity}>
                        <Text style={styles.buttonText}>Legg til</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GradientScreen>
    );
}


const styles = StyleSheet.create({
    gradientScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeArea: {
        flex: 1,
        width: '100%',
    },
    container: {
        width: '90%',
        margin: '5%',
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
    },
    dateText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 20,
    },
    pickerItem: {
        height: 50,
    },
    selectedFriends: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    friendTag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
    textArea: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#008080',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default Add;