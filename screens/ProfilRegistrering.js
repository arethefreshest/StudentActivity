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
const ProfilRegistrering = () => {
    console.log("ProfilRegistrering is rendering");
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profil Registrering Screen</Text>
        </View>
    );
};

export default ProfilRegistrering;
