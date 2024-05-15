import React from "react";
import { View, Text, Button, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import FriendRequestItem from "./FriendRequestItem";

const FriendRequests = ({ friendRequests, acceptFriend }) => {
    return (
        <View style={styles.feedContainer}>
            <Text style={styles.sectionTitle}>Venneforespørsler</Text>
            <FlatList
                data={friendRequests}
                renderItem={({ item }) => <FriendRequestItem item={item} acceptFriend={acceptFriend} />}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.feedListContainer}
            />
        </View>
    );
};

export default FriendRequests;