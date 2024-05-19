import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import GradientScreen from "./GradientScreen";
import InputField from "./InputField";
import { searchUsers } from "../FirebaseFunksjoner";
import { styles } from "../styles";

function SearchVenn({ navigation }) {
    const [email, setEmail] = useState("Bruker@example.com");

    const search = async () => {
        console.log("Applying filters with:", {email});
        const users = await searchUsers(email);
        navigation.navigate('AddVenn', { email, users });
    };

    return (
        <GradientScreen style={styles.gradientScreen}>
            <SafeAreaView style={styles.davidSafeArea}>
                <View style={styles.davidContainer}>
                    <Text style={styles.label}>Søk:</Text>
                    <InputField
                        value={email}
                        onChangeText={setEmail}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <TouchableOpacity style={styles.davidButton} onPress={search}>
                        <Text style={styles.davidButtonText}>Finn Venn</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default SearchVenn;