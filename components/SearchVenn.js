import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import GradientScreen from "./GradientScreen";
import InputField from "./InputField";

function SearchVenn({ navigation }) {
    const [keyWord, setKeyWord] = useState("Bruker");

    const handlePeopleChange = (value) => {
        setKeyWord(value);
    };

    const applyFilters = () => {
        console.log("Applying filters with:", {keyWord});
        navigation.navigate('AddVenn', {keyWord});
    };

    return (
        <GradientScreen style={styles.gradientScreen}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Text style={styles.label}>Søk:</Text>
                    <InputField
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        value={keyWord}
                        onValueChange={setKeyWord(value)}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
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
        marginTop: '35%',
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.44)',
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0)',
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
        height: 80,
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
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FFF',
        alignItems: 'center',
        height: 60,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: 'bold',
    }
});

export default SearchVenn;
