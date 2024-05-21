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
        <GradientScreen>
            <SafeAreaView style={styles.SafeAreaSokVenn}>
                <View style={styles.ContainerSokVenn}>
                    <Text style={styles.LabelSokVenn}>Søk:</Text>
                    <InputField
                        value={searchParam}
                        onChangeText={setSearchParam}
                        customStyleInner={styles.InputFieldSokVenn}
                    />
                    <TouchableOpacity style={styles.ButtonSokVenn} onPress={search}>
                        <Text style={styles.ButtonTextSokVenn}>Finn Venn</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default SearchVenn;