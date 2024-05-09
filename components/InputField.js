import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";

const InputField = ({
    icon: Icon,
    placeholder,
    onChangeText,
    secureTextEntry = false,
}) => {
    return (
            <View style={styles.inputOuter}>
                <View style={styles.inputInner}>
                    {Icon && (
                        <View style={styles.iconContainer}>
                            <Icon style={styles.inputIcon} />
                        </View>
                    )}
                    <TextInput
                        style={styles.textInput}
                        placeholder={placeholder}
                        placeholderTextColor="#00000080"
                        onChangeText={onChangeText}
                        secureTextEntry={secureTextEntry}
                    />
                </View>
            </View>
    );
};

export default InputField;