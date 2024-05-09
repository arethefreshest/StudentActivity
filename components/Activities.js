import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../FirebaseConfig';

function Activities({ route }) {
    const { people, price, location } = route.params;
    const [activities, setActivities] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        const fetchActivities = async () => {
            const numericPeople = Number(people);
            const locQuery = location ? location.toLowerCase() : '';
            const q = query(
                collection(db, "Activities"),
                where("MinP", "<=", numericPeople),
                where("MaxP", ">=", numericPeople),
                where("Location", "==", locQuery)
            );

            try {
                const querySnapshot = await getDocs(q);
                const fetchedActivities = [];
                querySnapshot.forEach(doc => {
                    fetchedActivities.push({ id: doc.id, ...doc.data() });
                });
                setActivities(fetchedActivities);
            } catch (error) {
                console.error("Failed to fetch activities:", error);
            }
        };

        fetchActivities();
    }, [people, price, location]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <ScrollView style={styles.container}>
            {activities.map((activity) => (
                <TouchableOpacity
                    key={activity.id}
                    style={styles.activityContainer}
                    onPress={() => toggleExpand(activity.id)}
                >
                    <Text style={styles.title}>{activity.Name}</Text>
                    <Text>Sted: {activity.Location}</Text>
                    <Text>Deltagere: {activity.MinP} - {activity.MaxP}</Text>
                    <Text>Price: {activity.Price} kr</Text>
                    {expandedId === activity.id && (
                        <View style={styles.details}>
                            <Text>Pris pr. person: {activity.Price} kr</Text>
                            <Text>Link: www.example.com</Text>
                            <Text>Legg til</Text>
                        </View>
                    )}
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f7fa',
    },
    activityContainer: {
        margin: 10,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        marginTop: 10,
    },
});

export default Activities;