import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import GradientScreen from "./GradientScreen";

function ActivityFilter({ navigation }) {
    const [people, setPeople] = useState(5);
    const [price, setPrice] = useState(500);
    const [location, setLocation] = useState('krs');

    const handlePeopleChange = (value) => {
        setPeople(value);
    };

    const handlePriceChange = (value) => {
        setPrice(value);
    };

    const handleTypeChange = (itemValue, itemIndex) => {
        setLocation(itemValue.toLowerCase());
    };

    const applyFilters = () => {
        console.log("Applying filters with:", { people, price, location });
        navigation.navigate('Activities', { people, price, location });
    };

    return (
        <GradientScreen style={styles.gradientScreen}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Text style={styles.label}>Deltagere:</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        value={people}
                        onValueChange={handlePeopleChange}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Text style={styles.value}>{people} personer</Text>

                    <Text style={styles.label}>Pris:</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1000}
                        step={50}
                        value={price}
                        onValueChange={handlePriceChange}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Text style={styles.value}>Maks {price}kr</Text>

                    <Text style={styles.label}>Sted:</Text>
                    <Picker
                        selectedValue={location}
                        onValueChange={handleTypeChange}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                    >
                        <Picker.Item label="Grimstad" value="grm" />
                        <Picker.Item label="Kristiansand" value="krs" />
                    </Picker>
                    <TouchableOpacity style={styles.button} onPress={applyFilters}>
                        <Text style={styles.buttonText}>SØK</Text>
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
        marginTop: 20,
    },
    container: {
        width: '80%',
        marginLeft: '10%',
        marginTop: '25%',
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.34)',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        height: 500,
    },
    slider: {
        width: '100%',
    },
    picker: {
        marginTop: 10,
        width: '100%',
        height: 80,
        borderRadius: 15,
        backgroundColor: 'rgba(248,248,248,0.47)',
    },
    pickerItem: {
        alignItems: "center",
        height: 80, // Smaller item height
    },
    label: {
        fontSize: 19,
        color: '#000',
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    value: {
        fontSize: 14,
        paddingBottom: 10,
    },
    button: {
        marginTop: 30,
        backgroundColor: '#008080', // Change to your app's theme color
        padding: 10,
        borderRadius: 15,
        borderWidth: 2, // Add border width
        borderColor: '#FFF', // Add border color
        alignItems: 'center',
        height: 60,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: 'bold',
    }
});

export default ActivityFilter;
