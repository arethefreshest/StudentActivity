import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "../styles";

const Button = ({ text, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.loginButton, style]}>
            <Text style={[styles.loginButtonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;