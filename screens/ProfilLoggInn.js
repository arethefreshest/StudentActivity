import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
import { auth } from "../FirebaseConfig";
import GradientScreen from "../components/GradientScreen";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ThirdPartyIconRow from "../components/ThirdPartyIconRow";
import Brukerikon from "../assets/Brukerikon";
import Passordikon from "../assets/Passordikon";

const ProfilLoggInn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User signed in: ", userCredential.user);
                // Perform actions after successful login
            })
            .catch((error) => {
                setError(`Login failed: ${error.message}`);
            });
    };

    return (
            <View style={{flex: 1}}>
                <GradientScreen>
                    <Text style={[styles.inputLabel, { left: 96, top: 172 }]}>Brukernavn/e-post</Text>
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
                    <TouchableOpacity>
                        <Text style={[styles.forgotPassword, { left: 226, top: 315 }]}>Glemt Passord?</Text>
                    </TouchableOpacity>
                    <Button
                        text="Logg inn"
                        onPress={handleLogin}
                        style={{ left: 126, top: 368}}
                    />
                    <Text style={[styles.italicText, { left: 127, top: 443 }]}>Eller logg deg inn med</Text>
                    <ThirdPartyIconRow
                        onPressGoogle={() => console.log('Google Login')}
                        onPressApple={() => console.log('Apple Login')}
                        onPressOutlook={() => console.log('Outlook Login')}
                        onPressFacebook={() => console.log('Facebook Login')}
                    />
                    <Text style={[styles.italicText, { left: 184, top: 564 }]}>Ny her?</Text>
                    <Button
                        text="Registrer deg"
                        onPress={() => navigation.navigate('ProfilRegistrering')}
                        style={{ left: 126, top: 604 }}
                    />
                </GradientScreen>
        </View>
    );
};

export default ProfilLoggInn;