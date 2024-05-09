import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { auth } from "../FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { styles } from "../styles";
import GradientScreen from "../components/GradientScreen";

const Profil = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigation.navigate("ProfilLoggInn");
        }).catch((error) => {
            console.error('Logout Failed', error);
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <GradientScreen>
                <Text style={styles.loginButtonText}>BOOM BABY</Text>
                <Button title="Log Out" onPress={handleLogout} />
            </GradientScreen>
        </View>
    );
};


export default Profil;