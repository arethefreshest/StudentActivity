import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../FirebaseConfig';

function Activities({ route }) {
    const { people, price, location } = route.params;
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading to true
    const [error, setError] = useState(null); // Initialize error to null

    const numericPeople = Number(people);  // Move numericPeople to a broader scope

    useEffect(async () => {
        const locQuery = location ? location.toLowerCase() : null;
        const q = query(
            collection(db, "Activities"),
            where("MinP", "<=", numericPeople),
            where("MaxP", ">=", numericPeople),
            where("Location", "==", locQuery)
        );

        setLoading(true);
        setError(null);

        try {
            const querySnapshot = await getDocs(q);
            const filteredActivities = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const totalPrice = data.Price * numericPeople;
                if (totalPrice <= price) {
                    filteredActivities.push({id: doc.id, ...data, totalPrice});
                }
            });
            setActivities(filteredActivities);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, [people, price, location, numericPeople]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Error: {error.message}</Text>
            </View>
        );
    }

    if (activities.length === 0 && !loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.noResults}>No activities found with the selected filters.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {activities.map((activity) => (
                <View key={activity.id} style={styles.activityContainer}>
                    <Text style={styles.title}>{activity.Name}</Text>
                    <Text>Price per Person: {activity.Price} kr</Text>
                    <Text>Number of people: {activity.MinP} to {activity.MaxP}</Text>
                    <Text>You are: {numericPeople} people</Text>
                    <Text>Total price: {activity.totalPrice} kr</Text>
                    <Text>Location: {activity.Location}</Text>
                    <Text>Description: {activity.Description}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    activityContainer: {
        marginBottom: 20,
        width: "80%",
        alignSelf: "center",
        padding: 10,
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 10,
        backgroundColor: '#61A0AF',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    noResults: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    error: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Activities;