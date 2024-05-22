import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";

const InputField = ({
    icon: Icon,
    placeholder,
    onChangeText,
    secureTextEntry = false,
    customStyle,
    customStyleInner
}) => {
    return (
            <View style={[styles.inputOuter, customStyle]}>
                <View style={[styles.inputInner, customStyleInner]}>
                    {Icon && (
                        <View style={styles.iconContainer}>
                            <Icon style={styles.inputIcon} />
                        </View>
                    )}
                    <TextInput
                        style={[styles.textInput, customStyle]}
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