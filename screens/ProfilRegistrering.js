import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
//import { auth, db } from "../FirebaseConfig";
//import { doc, setDoc } from "firebase/firestore";
import GradientScreen from "../components/ui/GradientScreen";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import ThirdPartyIconRow from "../components/ui/ThirdPartyIconRow";
import Brukerikon from "../assets/icons/Brukerikon";
import Passordikon from "../assets/icons/Passordikon";
import EpostIkon from "../assets/icons/EpostIkon";
import { registerUser } from "../firebase/FirebaseFunksjoner";
const ProfilRegistrering = () => {
    console.log("ProfilRegistrering is rendering");
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passord stemmer ikke overens!");
            return;
        }

        try {
            await registerUser(email, password, fullName);
            Alert.alert("Suksess", "Bruker ble registrert!");
            const action = navigation.navigate('ProfilHome');
            console.log('Navigation action response:', action);
            console.log('Display name:', auth.currentUser.displayName);
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
                <Text style={[styles.inputLabel, { left: 96, top: 252 }]}>E-post</Text>
                <View style={[styles.inputGroup, { left: 96, top: 273.3 }]}>
                    <InputField
                        icon={EpostIkon}
                        placeholder={"ola@nordmann.no"}
                        onChangeText={setEmail}
                        value={email}
                        keyboardType={"email-address"}
                        // I disse fieldsene kan vi også bruke onChangeText for å hente prop til å håndtere info
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 332 }]}>Passord</Text>
                <View style={[styles.inputGroup, { left: 96, top: 353.3 }]}>
                    <InputField
                        icon={Passordikon}
                        placeholder={"*********"}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 412 }]}>Bekreft passord</Text>
                <View style={[styles.inputGroup, { left: 96, top: 433.3 }]}>
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
                    style={{ left: 126, top: 512}}
                />
                <Button
                    text="Har bruker "
                    onPress={() => navigation.navigate('ProfilLoggInn')}
                    style={{ left: 126, top: 572 }}
                />
                <Text style={[styles.profilItalicText, { left: 126, top: 658 }]}>Eller registrer deg med</Text>
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
