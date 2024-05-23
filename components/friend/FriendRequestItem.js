import React from "react";
import {View, Text, Button, TouchableOpacity, Image} from "react-native";
import { styles } from "../../styles";
import {FontAwesome} from "@expo/vector-icons";

const FriendRequestItem = ({ item, acceptFriend }) => (
    <View style={styles.requestContainer}>
        {item.profileImageUrl && (
            <Image source={{ uri: item.profileImageUrl }} style={styles.profileImageFriend} />
        )}
        <Text style={styles.feedText}>{item.fullName}</Text>
        <TouchableOpacity
                onPress={() => acceptFriend(item.id)}
                style={styles.friendacceptButton}
        >
            <FontAwesome name="check" size={18} color="white" />
        </TouchableOpacity>
    </View>
);

export default FriendRequestItem;