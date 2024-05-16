import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, SafeAreaView, Alert } from 'react-native';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../FirebaseConfig';
import GradientScreen from "./GradientScreen";
import { sendFriendRequest } from "../FirebaseFunksjoner";

function AddVenn({ route }) {
    const { email, users: initialUsers } = route.params || {}; // Ensure email is destructured from route.params

    const [users, setUsers] = useState(initialUsers || []);
    const [loading, setLoading] = useState(!initialUsers);
    const [error, setError] = useState(null);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        console.log('Route params:', route.params);

        if (!email) {
            setError(new Error('Email parameter is missing'));
            setLoading(false);
            return;
        }

        if (initialUsers) {
            setLoading(false);
            return;
        }



        const q = query(
            collection(db, "users"),
            where("email", "==", email)
        );

        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const querySnapshot = await getDocs(q);
                console.log("Query Snapshot Size:", querySnapshot.size); // Log the size of the snapshot
                const result = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    console.log("User Data:", data); // Log each user data
                    result.push({ id: doc.id, ...data });
                });
                setUsers(result);
            } catch (e) {
                console.error('Error fetching users:', e)
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [email]);

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
                    <Text style={styles.noResults}>No Users with that email were found.</Text>
                </View>
            </GradientScreen>
        );
    }

    return (
        <GradientScreen style={styles.gradientScreen}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView style={styles.container}>
                    {users.map((user) => (
                        <TouchableOpacity
                            key={user.id}
                            style={styles.activityContainer}
                            onPress={() => toggleExpand(user.id)}
                        >
                            <Text style={styles.title}>{user.Name}</Text>
                            <Text style={styles.textTop}>Email: {user.email}</Text>
                            {expandedId === user.id && (
                                <View style={styles.details}>
                                    <Text style={styles.textCont}>Additional details here</Text>
                                    <TouchableOpacity
                                        style={styles.addButton}
                                        onPress={() => addFriend(user.id)}
                                    >
                                        <Text style={styles.addButtonText}>Legg til</Text>
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

const styles = StyleSheet.create({
    gradientScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeArea: {
        flex: 1,
        marginTop: 140,
        marginBottom: 100,
    },
    container: {
        flex: 1,
        padding: 10,
    },
    activityContainer: {
        margin: 10,
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.63)',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1e1d1d',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    details: {
        marginTop: 10,
    },
    activityIndicator: {
        top: 300,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    noResultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noResultsText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    addButton: {
        marginTop: 40,
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        marginLeft: '25%',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
    },
    textTop: {
        fontSize: 18,
        marginLeft: 40,
        marginTop: 10,
    },
    textCont: {
        fontStyle: "italic",
        fontSize: 14,
        marginTop: 10,
        marginLeft: 60,
    },
});

export default AddVenn;
