import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase/FirebaseConfig";
import { app } from "./firebase/FirebaseConfig";

function AuthScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = () => {
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

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User signed in
                console.log("User signed in:", userCredential.user);
            })
            .catch((error) => {
                setError(`Sign in failed: ${error.message}`);
                console.error(error);
            });
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login / Register</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={setEmail}
                value={email}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter your password"
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <Button title="Register" onPress={handleSignUp} />
            <Button title="Login" onPress={handleSignIn} />
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
);
}

export default AuthScreen;
