import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles';
import { useNavigation } from "@react-navigation/native";

const FriendsList = ({ friends }) => {
    const [showFriends, setShowFriends] = useState(true);
    const navigation = useNavigation();

    const handleFriendClick = (friend) => {
        navigation.navigate('ProfilHome', { friend });
    };

    return (
        <View style={styles.friendsListContainer}>
            <TouchableOpacity onPress={() => setShowFriends(!showFriends)}>
                <Text style={styles.friendsListSectionTitle}>Venner</Text>
            </TouchableOpacity>
            {showFriends && (
                <FlatList
                    data={friends}
                    renderItem={({ item }) => (
                        item ? (
                            <TouchableOpacity onPress={() => handleFriendClick(item)} style={styles.friendsListItem}>
                                {item.profileImageUrl && (
                                    <Image source={{ uri: item.profileImageUrl }} style={styles.friendsListItemProfileImage} />
                                )}
                                <Text style={styles.friendsListItemText}>{item.fullName}</Text>
                            </TouchableOpacity>
                        ) : null
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.friendsListFeedListContainer}
                />
            )}
        </View>
    );
};

export default FriendsList;