/*

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";  // Make sure this path is correct

function AuthScreen({ navigation }) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginRegister = () => {
        if (isLogin) {
            // Sign in logic using Firebase
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("User signed in:", userCredential.user);
                    // You can navigate or do other actions here
                })
                .catch((error) => {
                    console.error("Error signing in:", error.code, error.message);
                    // Handle errors (e.g., show an alert or message on your UI)
                });
        } else {
            // Register logic using Firebase
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("User registered:", userCredential.user);
                    // You can navigate or do other actions here
                })
                .catch((error) => {
                    console.error("Error registering:", error.code, error.message);
                    // Handle errors (e.g., show an alert or message on your UI)
                });
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>{isLogin ? 'Login' : 'Register'}</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Button title={isLogin ? "Login" : "Register"} onPress={handleLoginRegister} />
            <Button
                title={isLogin ? "Register?" : "Already have an account?"}
                onPress={() => setIsLogin(!isLogin)}
            />
        </View>
    );
}

export default AuthScreen;
*/

import React, { useState, useContext } from 'react';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './FirebaseConfig';
import { AuthContext } from './AuthContext';

/* function AuthScreen() {
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
                setError(`Sign up failed: ${error.message}`);
                console.error(error);
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
        <div>
            <h1>Login / Register</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <button onClick={handleSignUp}>Register</button>
            <button onClick={handleSignIn}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default AuthScreen; */

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


}
