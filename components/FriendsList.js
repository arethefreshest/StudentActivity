import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from "@react-navigation/native";

const FriendsList = ({ friends }) => {
    const [showFriends, setShowFriends] = useState(true);
    const navigation = useNavigation();

    const handleFriendClick = (friend) => {
        navigation.navigate('ProfilHome', { friend });
    };

    return (
        <View style={styles.sectionContainer}>
            <TouchableOpacity onPress={() => setShowFriends(!showFriends)}>
                <Text style={styles.sectionTitle}>Venner</Text>
            </TouchableOpacity>
            {showFriends && (
                <FlatList
                    data={friends}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleFriendClick(item)} style={styles.friendItem}>
                            {item.profileImageUrl && (
                                <Image source={{ uri: item.profileImageUrl }} style={styles.profileImageFriend} />
                            )}
                            <Text style={styles.feedText}>{item.fullName}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.feedListContainer}
                />
            )}
        </View>
    );
};

export default FriendsList;