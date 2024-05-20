import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import GradientScreen from "../ui/GradientScreen";
import InputField from "../ui/InputField";
import { searchUsers } from "../../firebase/FirebaseFunksjoner";
import { styles } from "../../styles";

function SearchVenn({ navigation }) {
    const [searchParam, setSearchParam] = useState("Bruker@example.com");

    const search = async () => {
        console.log("Applying filters with:", { searchParam });
        const users = await searchUsers( searchParam );
        navigation.navigate('AddVenn', { searchParam, users });
    };

    return (
        <GradientScreen style={styles.searchVennGradientScreen}>
            <SafeAreaView style={styles.searchVennSafeArea}>
                <View style={styles.searchVennContainer}>
                    <Text style={styles.searchVennLabel}>Søk etter venner:</Text>
                    <InputField
                        value={searchParam}
                        onChangeText={setSearchParam}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        customStyle={styles.customInputField}
                        customStyleInner={styles.customInputField2}
                    />
                    <TouchableOpacity style={styles.searchVennButton} onPress={search}>
                        <Text style={styles.searchVennButtonText}>Finn Venn</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default SearchVenn;