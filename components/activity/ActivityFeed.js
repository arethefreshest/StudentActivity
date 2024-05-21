import React, { useState, useEffect } from "react";
import {View, Text, FlatList, TouchableOpacity} from "react-native";
import { styles } from "../../styles";
import ActivityItem from "./ActivityItem";
import { fetchUserActivities } from "../../firebase/FirebaseFunksjoner";
import { auth } from "../../firebase/FirebaseConfig";


const ActivityFeed = () => {
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(true);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const userId = auth.currentUser.uid;
                const userActivities = await fetchUserActivities(userId);
                setActivities(userActivities);
            } catch (e) {
                console.error('Error fetching activities:', e);
            }
        };

        fetchActivities();
    }, []);
    return (
        <View style={styles.feedContainer}>
            <TouchableOpacity onPress={() => setShowActivities(!showActivities)}>
                <Text style={styles.titleActivityFeed}>Aktiviteter</Text>
            </TouchableOpacity>
            {showActivities && (
                <FlatList
                    data={activities}
                    renderItem={({ item }) => <ActivityItem item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.feedListContainer}
                />
            )}
        </View>
    );
};

export default ActivityFeed;