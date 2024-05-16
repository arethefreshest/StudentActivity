import React, {useState} from "react";
import {View, Text, FlatList, TouchableOpacity} from "react-native";
import { styles } from "../styles";
import ActivityItem from "./ActivityItem";


const ActivityFeed = ({ activities }) => {
    const [showActivities, setShowActivities] = useState(true);
    return (
        <View style={styles.feedContainer}>
            <TouchableOpacity onPress={() => setShowActivities(!showActivities)}>
                <Text style={styles.sectionTitle}>Aktiviteter</Text>
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