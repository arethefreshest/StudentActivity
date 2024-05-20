import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../styles";

const ActivityItem = ({ item }) => {
    const date = item.selectedDate ? new Date(item.selectedDate.seconds * 1000) : null;
    return (
        <View style={styles.activityItemContainer}>
            <View style={styles.activityItemHeader}>
                {date ? (
                    <Text style={styles.activityItemFeedText}>{`${date.toDateString()} - ${date.toLocaleTimeString()}`}</Text>
                ) : (
                    <Text style={styles.activityItemFeedText}>No Date Available</Text>
                )}
            </View>
            <View style={styles.activityItemContent}>
                {item.imageUri && <Image source={{ uri: item.imageUri }} style={styles.activityItemProfileImage} />}
                <View style={styles.activityItemTextContainer}>
                    <Text style={styles.activityItemFeedText}>{item.activityName}</Text>
                    <View style={styles.activityItemIconContainer}>
                        <MaterialCommunityIcons name="map-marker" size={18} color="#FFECE7" />
                        <Text style={styles.activityItemFeedText}>{item.location}</Text>
                    </View>
                </View>
                <View style={styles.activityItemIconsContainer}>
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