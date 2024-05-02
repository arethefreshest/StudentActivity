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
import EpostIkon from "../assets/EpostIkon";
const ProfilRegistrering = () => {
    console.log("ProfilRegistrering is rendering");
    return (
        <View style={{flex: 1}}>
            <GradientScreen>
                <Text style={[styles.inputLabel, { left: 96, top: 172 }]}>Ditt fulle navn</Text>
                <View style={[styles.inputGroup, { left: 96, top: 193.3 }]}>
                    <InputField
                        icon={Brukerikon}
                        placeholder={"Ola Nordmann"}
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 252 }]}>Velg ditt brukernavn</Text>
                <View style={[styles.inputGroup, { left: 96, top: 273.3 }]}>
                    <InputField
                        icon={Brukerikon}
                        placeholder={"olanordmann31"}
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 332 }]}>E-post</Text>
                <View style={[styles.inputGroup, { left: 96, top: 353.3 }]}>
                    <InputField
                        icon={EpostIkon}
                        placeholder={"ola@nordmann.no"}
                        // I disse fieldsene kan vi også bruke onChangeText for å hente prop til å håndtere info
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 412 }]}>Passord</Text>
                <View style={[styles.inputGroup, { left: 96, top: 433.3 }]}>
                    <InputField
                        icon={Passordikon}
                        placeholder={"*********"}
                    />
                </View>
                <Text style={[styles.inputLabel, { left: 96, top: 492 }]}>Bekreft passord</Text>
                <View style={[styles.inputGroup, { left: 96, top: 513.3 }]}>
                    <InputField
                        icon={Passordikon}
                        placeholder={"*********"}
                    />
                </View>
                <Button
                    text="Lag min bruker"
                    //onPress={registrer bruker logikk}
                    style={{ left: 126, top: 592}}
                />
                <Text style={[styles.italicText, { left: 126, top: 658 }]}>Eller registrer deg med</Text>
                <ThirdPartyIconRow
                    onPressGoogle={() => console.log('Google Login')}
                    onPressApple={() => console.log('Apple Login')}
                    onPressOutlook={() => console.log('Outlook Login')}
                    onPressFacebook={() => console.log('Facebook Login')}
                    style={{top: 689}}
                />
            </GradientScreen>
        </View>
    );
};

export default ProfilRegistrering;
