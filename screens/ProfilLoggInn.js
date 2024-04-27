import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles";
import { auth } from "../FirebaseConfig";

const ProfilLoggInn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = (useState(''));
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
        <LinearGradient
            colors={['#61A0AF', '#00796B']} // Top to bottom gradient for background
            style={styles.gradientBackground}
            >
            <TouchableOpacity style={styles.burgerMenu}>
                <Image source={require('../assets/burgermeny.svg')} style={styles.burgerIcon} />
            </TouchableOpacity>

            <Image source={require('../assets/studaklogo.svg')} style={styles.logo} />

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Brukernavn/e-post</Text>
                <View style={styles.inputOuter}>
                    <TextInput
                        style={styles.inputInner}
                        placeholder={"olanordman1"}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Image source={require('../assets/brukerikon.svg')} style={styles.inputIcon} />
                </View>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Passord</Text>
                <View style={styles.inputOuter}>
                    <TextInput
                        style={styles.inputInner}
                        placeholder={"********"}
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Image source={require('../assets/keyicon.svg')} style={styles.inputIcon} />
                </View>
            </View>

            <TouchableOpacity style={styles.forgotPassword} onPress={() => { /* Forgot password logic */ }}>
                <Text style={styles.forgotPasswordText}>Glemt passord?</Text>
            </TouchableOpacity>

            <View style={styles.thirdPartyLogin}>
                <Text style={styles.thirdPartyText}>Eller logg deg inn med</Text>
                <View style={styles.thirdPartyIcons}>
                    <TouchableOpacity>
                        <Image source={require('../assets/googlelogo.svg')} style={styles.thirdPartyIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/applelogo.svg')} style={styles.thirdPartyIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/outlooklogo.svg')} style={styles.thirdPartyIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/facebooklogo.svg')} style={styles.thirdPartyIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.newHereText}>Ny her?</Text>

            <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate('screen1')}
            >
               <Text style={styles.registerButtonText}>Registrer deg</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default ProfilLoggInn;