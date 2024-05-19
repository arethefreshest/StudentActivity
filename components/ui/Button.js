import React from "react";
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import { styles } from "../../styles";

const Button = ({ text, onPress, style, textStyle, icon }) => {
    console.log("Button.js: Button -> icon", icon);
    return (
        <TouchableOpacity onPress={onPress} style={[styles.loginButton, style]}>
            {icon && <View style={styles.iconContainer}>{icon}</View>}
            {text && <Text style={[styles.loginButtonText, textStyle]}>{text}</Text>}
        </TouchableOpacity>
    );
};

export default Button;