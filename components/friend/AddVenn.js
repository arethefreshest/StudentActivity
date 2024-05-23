import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
    Alert,
    Image
} from 'react-native';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/FirebaseConfig';
import GradientScreen from "../ui/GradientScreen";
import { sendFriendRequest, searchUsers } from "../../firebase/FirebaseFunksjoner";
import {styles} from "../../styles";

function AddVenn({ route }) {
    const { searchParam, users: initialUsers } = route.params || {}; // Ensure email is destructured from route.params

    const [users, setUsers] = useState(initialUsers || []);
    const [loading, setLoading] = useState(!initialUsers);
    const [error, setError] = useState(null);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        console.log('Route params:', route.params);

        if (!searchParam) {
            setError(new Error('Search parameter is missing'));
            setLoading(false);
            return;
        }

        if (initialUsers) {
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await searchUsers(searchParam);
                setUsers(result);
            } catch (e) {
                console.error('Error fetching users:', e)
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [searchParam]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const addFriend = async (friendId) => {
        await sendFriendRequest(friendId);
        Alert.alert('Venneforespørsel sendt', 'Venneforespørsel sendt til bruker');
    };

    if (loading) {
        return (
            <GradientScreen>
                <ActivityIndicator size="large" color="#0000ff" style={{ top: 300 }} />
            </GradientScreen>
        );
    }

    if (error) {
        return (
            <GradientScreen>
                <View style={styles.container}>
                    <Text style={styles.error}>Error: {error.message}</Text>
                </View>
            </GradientScreen>
        );
    }

    if (users.length === 0 && !loading) {
        return (
            <GradientScreen>
                <View style={styles.container}>
                    <Text style={styles.noResults}>No Users with that email or name were found.</Text>
                </View>
            </GradientScreen>
        );
    }

    return (
        <GradientScreen>
            <SafeAreaView style={styles.safeAreaAddVenn}>
                <ScrollView>
                    {users.map((user) => (
                        <TouchableOpacity
                            key={user.id}
                            style={styles.containerAddVenn}
                            onPress={() => toggleExpand(user.id)}
                        >
                            {user.profileImageUrl && (
                            <Image source={{ uri: user.profileImageUrl }} style={styles.profileImage} />
                            )}
                            <Text style={styles.titleAddVenn}>{user.fullName}</Text>
                            <Text style={styles.textTopAddVenn}>Email: {user.email}</Text>
                            {expandedId === user.id && (
                                <View style={styles.detailsAddVenn}>
                                    <Text style={styles.textContAddVenn}>Additional details here</Text>
                                    <TouchableOpacity
                                        style={styles.buttonAddVenn}
                                        onPress={() => addFriend(user.id)}
                                    >
                                        <Text style={styles.buttonTextAddVenn}>Legg til</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default AddVenn;
