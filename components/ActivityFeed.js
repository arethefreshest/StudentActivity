import React from "react";
import { View, Text, FlatList} from "react-native";
import { styles } from "../styles";
import ActivityItem from "./ActivityItem";


const ActivityFeed = ({ activities }) => {
    return (
        <View style={styles.feedContainer}>
            <Text style={styles.sectionTitle}>Aktiviteter</Text>
            <FlatList
                data={activities}
                renderItem={({ item }) => <ActivityItem item={item} />}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.feedListContainer}
            />
        </View>
    );
};

export default ActivityFeed;