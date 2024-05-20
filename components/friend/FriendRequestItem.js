import React from "react";
import {View, Text, Button, TouchableOpacity, Image} from "react-native";
import { styles } from "../../styles";
import {FontAwesome} from "@expo/vector-icons";

const FriendRequestItem = ({ item, acceptFriend }) => (
    <View style={styles.friendRequestItemContainer}>
        {item.profileImageUrl && (
            <Image source={{ uri: item.profileImageUrl }} style={styles.friendRequestItemProfileImage} />
        )}
        <Text style={styles.friendRequestItemText}>{item.fullName}</Text>
        <TouchableOpacity
            onPress={() => acceptFriend(item.id)}
            style={styles.friendRequestItemAcceptButton}
        >
            <FontAwesome name="check" size={18} color="white" />
        </TouchableOpacity>
    </View>
);

export default FriendRequestItem;