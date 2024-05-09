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
import ThirdPartyIconRow from "../components/ThirdPartyIconRow";
import EpostIkon from "../assets/EpostIkon";

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
    console.log("ProfilRegistrering is rendering");
    return (
        <View style={{flex: 1}}>
            <GradientScreen>
                <Text style={[styles.inputLabel, { left: 96, top: 172 }]}>Ditt fulle navn</Text>
                <View style={[styles.inputGroup, { left: 96, top: 193.3 }]}>
                    <InputField
                        icon={Brukerikon}
                        placeholder={"Ola Nordmann"}
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 252 }]}>Velg ditt brukernavn</Text>
                <View style={[styles.inputGroup, { left: 96, top: 273.3 }]}>
                    <InputField
                        icon={Brukerikon}
                        placeholder={"olanordmann31"}
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 332 }]}>E-post</Text>
                <View style={[styles.inputGroup, { left: 96, top: 353.3 }]}>
                    <InputField
                        icon={EpostIkon}
                        placeholder={"ola@nordmann.no"}
                        // I disse fieldsene kan vi også bruke onChangeText for å hente prop til å håndtere info
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 412 }]}>Passord</Text>
                <View style={[styles.inputGroup, { left: 96, top: 433.3 }]}>
                    <InputField
                        icon={Passordikon}
                        placeholder={"*********"}
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 492 }]}>Bekreft passord</Text>
                <View style={[styles.inputGroup, { left: 96, top: 513.3 }]}>
                    <InputField
                        icon={Passordikon}
                        placeholder={"*********"}
                    />
                </View>
                <Button
                    text="Lag min bruker"
                    //onPress={registrer bruker logikk}
                    style={{ left: 126, top: 592}}
                />
                <Text style={[styles.italicText, { left: 126, top: 658 }]}>Eller registrer deg med</Text>
                <ThirdPartyIconRow
                    onPressGoogle={() => console.log('Google Login')}
                    onPressApple={() => console.log('Apple Login')}
                    onPressOutlook={() => console.log('Outlook Login')}
                    onPressFacebook={() => console.log('Facebook Login')}
                    style={{top: 689}}
                />
            </GradientScreen>
        </View>
    );
};

export default ProfilRegistrering;

/*
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

     */