import React from "react";
import { View, Text, Button} from "react-native";
import { styles } from "../styles";

const FriendRequestItem = ({ item, acceptFriend }) => (
    <View style={styles.requestContainer}>
        <Text style={styles.feedText}>{item}</Text>
        <Button title="Accept" onPress={() => acceptFriend(item)} />
    </View>
);

export default FriendRequestItem;