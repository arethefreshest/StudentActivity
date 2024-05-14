import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import GradientScreen from "./GradientScreen";

function Add({ navigation }) {
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
});

export default ActivityFilter;
