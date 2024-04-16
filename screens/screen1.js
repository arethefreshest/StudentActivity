import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles.js";

export default function Screen1() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen 1</Text>
        </View>
    );
}