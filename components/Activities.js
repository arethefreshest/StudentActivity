import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../FirebaseConfig';
import GradientScreen from "./GradientScreen";

function Activities({ route, navigation }) {
    const { people, price, location } = route.params;
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedId, setExpandedId] = useState(null);

    const numericPeople = Number(people); // Move numericPeople to a broader scope
    const locQuery = location ? location.toLowerCase() : null;

    useEffect(() => {
        const numericPeople = Number(people); // Convert people to number
        const locQuery = location ? location.toLowerCase() : null; // Ensure location is in lower case
        const q = query(
            collection(db, "Activities"),
            where("MinP", "<=", numericPeople),
            where("MaxP", ">=", numericPeople),
            where("Location", "==", locQuery)
        );


        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const querySnapshot = await getDocs(q);
                const filteredActivities = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const totalPrice = data.Price * numericPeople;
                    if (totalPrice <= price) {
                        filteredActivities.push({ id: doc.id, ...data, totalPrice });
                    }
                });
                setActivities(filteredActivities);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [people, price, location]); // Removed numericPeople from dependencies

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const calendaradd = (activity) => {
        navigation.navigate('Calendar', {selectedActivity: activity});
    }



    if (loading) {
        return (
            <GradientScreen>
                <ActivityIndicator size="large" color="#0000ff" style={{ top: 300}} />
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

    if (activities.length === 0 && !loading) {
        return (
            <GradientScreen>
                <View style={styles.container}>
                    <Text style={styles.noResults}>No activities found with the selected filters.</Text>
                </View>
            </GradientScreen>
        );
    }


    return (
        <GradientScreen style={styles.gradientScreen}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView style={styles.container}>
                    {activities.map((activity) => (
                        <TouchableOpacity
                            key={activity.id}
                            style={styles.activityContainer}
                            onPress={() => toggleExpand(activity.id)}
                        >
                            <Text style={styles.title}>{activity.Name}</Text>
                            <Text style={styles.textTop}>Sted: {activity.Location}</Text>
                            <Text style={styles.textTop}>Deltager: {numericPeople} people</Text>
                            <Text style={styles.textTop}>Pris: {activity.totalPrice} kr</Text>
                            {expandedId === activity.id && (
                                <View style={styles.details}>
                                    <Text style={styles.textCont}>Price per Person: {activity.Price} kr</Text>
                                    <Text style={styles.textCont}>Mulige Deltagere: {activity.MinP} to {activity.MaxP}</Text>
                                    <Text style={styles.textCont2}>{activity.Description}</Text>
                                    <Text style={styles.textLink}>{activity.WhatYouNeed}</Text>
                                    <TouchableOpacity
                                        style={styles.addButton}
                                        onPress={() => calendaradd(activity)}
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
        marginLeft:'25%',
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
    textCont2: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 30,
        marginLeft: 40,
    },
    textLink: {
        marginTop: 20,
        fontSize:18,
        marginLeft: 60,
    }
});

export default Activities;