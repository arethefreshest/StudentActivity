import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
import { auth, db } from "../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import GradientScreen from "../components/GradientScreen";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ThirdPartyIconRow from "../components/ThirdPartyIconRow";
import Brukerikon from "../assets/Brukerikon";
import Passordikon from "../assets/Passordikon";
import EpostIkon from "../assets/EpostIkon";
const ProfilRegistrering = () => {
    console.log("ProfilRegistrering is rendering");
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passord stemmer ikke overens!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created and signed in: ", userCredential.user);

            await setDoc(doc(db, "users", userCredential.user.uid), {
                fullName,
                userName,
                email
            });
            Alert.alert("Success", "User registered successfully!");
            console.log('Current Navigation State:', navigation.getState());
            const action = navigation.navigate('ProfilHome');
            console.log('Navigation action response:', action);
        } catch (error) {
            setError(error.message);
            Alert.alert("Registration failed", error.message);
        }
    };
    return (
        <View style={{flex: 1}}>
            <GradientScreen>
                <Text style={[styles.inputLabel, { left: 96, top: 172 }]}>Ditt fulle navn</Text>
                <View style={[styles.inputGroup, { left: 96, top: 193.3 }]}>
                    <InputField
                        icon={Brukerikon}
                        placeholder={"Ola Nordmann"}
                        onChangeText={setFullName}
                        value={fullName}
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 252 }]}>Velg ditt brukernavn</Text>
                <View style={[styles.inputGroup, { left: 96, top: 273.3 }]}>
                    <InputField
                        icon={Brukerikon}
                        placeholder={"olanordmann31"}
                        onChangeText={setUserName}
                        value={userName}
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 332 }]}>E-post</Text>
                <View style={[styles.inputGroup, { left: 96, top: 353.3 }]}>
                    <InputField
                        icon={EpostIkon}
                        placeholder={"ola@nordmann.no"}
                        onChangeText={setEmail}
                        value={email}
                        keyboardType={"email-address"}
                        // I disse fieldsene kan vi også bruke onChangeText for å hente prop til å håndtere info
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 412 }]}>Passord</Text>
                <View style={[styles.inputGroup, { left: 96, top: 433.3 }]}>
                    <InputField
                        icon={Passordikon}
                        placeholder={"*********"}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 492 }]}>Bekreft passord</Text>
                <View style={[styles.inputGroup, { left: 96, top: 513.3 }]}>
                    <InputField
                        icon={Passordikon}
                        placeholder={"*********"}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        secureTextEntry
                    />
                </View>
                <Button
                    text="Lag min bruker"
                    onPress={handleSignUp}
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
                <Button text="Already have an account? Log In" onPress={() => navigation.navigate('ProfilLoggInn')} />
            </GradientScreen>
        </View>
    );
};

export default ProfilRegistrering;
