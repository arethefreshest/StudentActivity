import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../styles";

const ActivityItem = ({ item }) => {
    const date = item.selectedDate ? new Date(item.selectedDate.seconds * 1000) : null;
    return (
        <View style={styles.activityItemContainer}>
            <View style={styles.activityHeader}>
                {date ? (
                    <Text style={styles.feedText}>{`${date.toDateString()} - ${date.toLocaleTimeString()}`}</Text>
                ) : (
                    <Text style={styles.feedText}>No Date Available</Text>
                )}
            </View>
            <View style={styles.activityContent}>
                {item.imageUri && <Image source={{ uri: item.imageUri }} style={styles.activityProfileImage} />}
                <View style={styles.activityTextContainer}>
                    <Text style={styles.feedText}>{item.activityName}</Text>
                    <View style={styles.activityIconContainer}>
                        <MaterialCommunityIcons name="map-marker" size={18} color="#FFECE7" />
                        <Text style={styles.feedText}>{item.location}</Text>
                    </View>
                </View>
                <View style={styles.activityIconsContainer}>
                    <TouchableOpacity>
                        <FontAwesome name="heart-o" size={24} color="#FFECE7" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="comment" size={24} color="#FFECE7" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="pencil" size={24} color="#FFECE7" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ActivityItem;