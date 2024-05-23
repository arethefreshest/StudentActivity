import React, {useState} from "react";
import {View, Text, Button, Image, FlatList, TouchableOpacity, Alert} from "react-native";
import { styles } from "../../styles";
import FriendRequestItem from "./FriendRequestItem";

const FriendRequests = ({ friendRequests, acceptFriend, onFriendAccepted }) => {
    const [showRequests, setShowRequests] = useState(true);
    const [requests, setRequests] = useState(friendRequests);

    const handleAcceptFriend = async (friendId) => {
        await acceptFriend(friendId);
        setRequests(requests.filter(request => request.id !== friendId));
        onFriendAccepted(friendId);
        Alert.alert('Venneforespørsel akseptert', 'Du har nå en ny venn!');
    };

    return (
        <View style={styles.containerFriendRequest}>
            <TouchableOpacity onPress={() => setShowRequests(!showRequests)}>
                <Text style={styles.titleFriendRequest}>Venneforespørsler</Text>
            </TouchableOpacity>
            {showRequests && (
                <FlatList
                    data={friendRequests}
                    renderItem={({ item }) => <FriendRequestItem item={item} acceptFriend={handleAcceptFriend} />}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.feedListContainer}
                />
            )}
        </View>
    );
};

export default FriendRequests;