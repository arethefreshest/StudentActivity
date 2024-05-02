import React, {Fragment, useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import AuthScreen from "../Login";
import GradientScreen from "../components/GradientScreen";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../FirebaseConfig";
import Button from "../components/Button";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/InputField";
import Brukerikon from "../assets/Brukerikon";
import Passordikon from "../assets/Passordikon";

const handleSignUp = () => {
    if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User created and signed in
            console.log("User created and signed in:", userCredential.user);
        })
        .catch((error) => {
            setError(`Sign up failed: ${error.message} (Error Code: ${error.code})`);
            console.error("Full error details:", error);
        });
};

const ProfilRegistrering = () => {
return (
    <view style={{flex: 1}}>
    <GradientScreen>
        <Text style={[styles.inputLabel, { left: 96, top: 172 }]}>e-post</Text>
        <View style={[styles.inputGroup, { left: 96, top: 193.3 }]}>
            <InputField
                icon={Brukerikon}
                placeholder={"olanordman1"}
                onChangeText={setEmail}
            />
        </View>
        <Text style={[styles.inputLabel, { left: 96, top: 252 }]}>Passord</Text>
        <View style={[styles.inputGroup, { left: 96, top: 273.3 }]}>
            <InputField
                icon={Passordikon}
                placeholder={"*********"}
                secureTextEntry
                onChangeText={setPassword}
            />
        </View>
        <Text style={[styles.inputLabel, { left: 96, top: 252 }]}>Gjenta passord</Text>
        <View style={[styles.inputGroup, { left: 96, top: 273.3 }]}>
            <InputField
                icon={Passordikon}
                placeholder={"*********"}
                secureTextEntry
                onChangeText={setConfirmPassword}
            />
        </View>
        <Button
            text="Registrer"
            onPress={handleSignUp}
            style={{ left: 126, top: 368}}
        />
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </GradientScreen>
    </view>
);};

    export default ProfilRegistrering;