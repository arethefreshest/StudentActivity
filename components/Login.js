import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function AuthScreen({ navigation }) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginRegister = () => {
        console.log("Auth action with:", { email, password });
        // Here, integrate with your backend or navigation logic
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
