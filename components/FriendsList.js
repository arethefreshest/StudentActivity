import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const FriendsList = ({ friends }) => {
    const [showFriends, setShowFriends] = useState(true);

    return (
        <View style={styles.feedContainer}>
            <TouchableOpacity onPress={() => setShowFriends(!showFriends)}>
                <Text style={styles.sectionTitle}>Venner</Text>
            </TouchableOpacity>
            {showFriends && (
                <FlatList
                    data={friends}
                    renderItem={({ item }) => (
                        <View style={styles.friendItem}>
                            <Text style={styles.feedText}>{item.fullName}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.feedListContainer}
                />
            )}
        </View>
    );
};

export default FriendsList;