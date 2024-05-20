import React, {useEffect, useState} from "react";
import {View, Text, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import { styles } from "../styles";
import { auth, db } from "../firebase/FirebaseConfig";
import {doc, updateDoc, deleteDoc, getDoc} from "firebase/firestore";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import { EmailAuthProvider, reauthenticateWithCredential} from "@firebase/auth";
import { useNavigation } from '@react-navigation/native';


const ProfilSettings = () => {
    const [dob, setDob] = useState('');
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const navigation = useNavigation();


    useEffect(() => {
        const fetchUserData = async () => {
            const userId = auth.currentUser.uid;
            const userRef = doc(db, 'users', userId);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                const data = userDoc.data();
                setDob(data.dob || '');
                setUniversity(data.university || '');
                setDegree(data.degree || '');
                setStartDate(data.startDate || '');
                setEndDate(data.endDate || '');
            }
        };

        fetchUserData()
            .then(() => console.log('User data fetched'))
            .catch((e) => console.error('Error fetching user data:', e));
    }, []);

    const handleSave = async () => {
        const userId = auth.currentUser.uid;
        const userRef = doc(db, 'users', userId);

        if (!/^\d{6}$/.test(startDate) || !/^\d{6}$/.test(endDate)) {
            Alert.alert('Invalid Date Format', 'Please enter the dates in DDMMYY format.');
            return;
        }

        try {
            await updateDoc(userRef, {
                dob,
                university,
                degree,
                startDate,
                endDate
            });
            Alert.alert('Endringer lagret', 'Profilen din er oppdatert');
            navigation.navigate('Profil', { profileUpdated: true });
        } catch (e) {
            console.error('Error updating user:', e);
            Alert.alert('Feil', 'Kunne ikke lagre endringer');
        }
    };
    const handleDeleteProfile = async () => {
        const user = auth.currentUser;
        if (!user) return;

        Alert.prompt(
            'Re-authenticate',
            'Please enter your password to confirm:',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: async (password) => {
                        try {
                            const credential = EmailAuthProvider.credential(user.email, password);
                            await reauthenticateWithCredential(user, credential);


                            const userId = user.uid;
                            const userRef = doc(db, 'users', userId);

                            await deleteDoc(userRef);
                            await user.delete();

                            Alert.alert('Profil slettet', 'Brukeren din er slettet');
                            navigation.navigate("ProfilRegistrering");
                        } catch (error) {
                            console.error('Error during re-authentication or deletion:', error);
                            Alert.alert('Error', 'Failed to delete profile. Please try again.');
                        }
                    }
                }
            ],
            'secure-text'
        );
    };

    return (
        <View style={styles.profilSettingsContainer}>
            <ScrollView contentContainerStyle={styles.profilSettingsScrollContainer} style={{ flex: 1 }}>
                <Text style={styles.sectionTitle}>Profile Settings</Text>
                <View style={styles.profilSettingsInputGroup2}>
                    <InputField
                        placeholder="Date of Birth"
                        value={dob}
                        onChangeText={setDob}
                    />
                </View>
                <View style={styles.profilSettingsInputGroup2}>
                    <InputField
                        placeholder="University"
                        value={university}
                        onChangeText={setUniversity}
                    />
                </View>
                <View style={styles.profilSettingsInputGroup2}>
                    <InputField
                        placeholder="Degree"
                        value={degree}
                        onChangeText={setDegree}
                    />
                </View>
                <View style={styles.profilSettingsInputGroup2}>
                    <InputField
                        placeholder="Start Date (DDMMYY)"
                        value={startDate}
                        onChangeText={setStartDate}
                    />
                </View>
                <View style={styles.profilSettingsInputGroup2}>
                    <InputField
                        placeholder="End Date (DDMMYY)"
                        value={endDate}
                        onChangeText={setEndDate}
                    />
                </View>
                <View style={styles.profilSettingsButtonContainer2}>
                    <Button text="Lagre" onPress={handleSave} style={styles.customButton} />
                    <Button text="Slett profil" onPress={handleDeleteProfile} style={styles.customButton} />
                </View>
            </ScrollView>
        </View>
    );
};

export default ProfilSettings;