import React, {useEffect, useState} from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { auth, db } from "../FirebaseConfig";
import {doc, updateDoc, deleteDoc, getDoc} from "firebase/firestore";

const ProfilSettings = () => {
    const [dob, setDob] = useState('');
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


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

        try {
            await updateDoc(userRef, {
                dob,
                university,
                degree,
                startDate,
                endDate
            });
            Alert.alert('Endringer lagret', 'Profilen din er oppdatert');
        } catch (e) {
            console.error('Error updating user:', e);
            Alert.alert('Feil', 'Kunne ikke lagre endringer');
        }
    };
    const handleDeleteProfile = async () => {
        const userId = auth.currentUser.uid;
        const userRef = doc(db, 'users', userId);

        await deleteDoc(userRef);
        await auth.currentUser.delete();

        Alert.alert('Profil slettet', 'Brukeren din er slettet');
    };

    return (
        <View style={styles.settingsContainer}>
            <Text style={styles.sectionTitle}>Profile Settings</Text>
            <TextInput
                style={styles.textFieldInput}
                placeholder="Date of Birth"
                value={dob}
                onChangeText={setDob}
            />
            <TextInput
                style={styles.textFieldInput}
                placeholder="University"
                value={university}
                onChangeText={setUniversity}
            />
            <TextInput
                style={styles.textFieldInput}
                placeholder="Degree"
                value={degree}
                onChangeText={setDegree}
            />
            <TextInput
                style={styles.textFieldInput}
                placeholder="Start Date"
                value={startDate}
                onChangeText={setStartDate}
            />
            <TextInput
                style={styles.textFieldInput}
                placeholder="End Date"
                value={endDate}
                onChangeText={setEndDate}
            />
            <Button title="Save" onPress={handleSave} />
            <TouchableOpacity onPress={handleDeleteProfile} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfilSettings;