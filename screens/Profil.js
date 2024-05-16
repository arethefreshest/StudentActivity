import React, { useState, useEffect } from "react";
import {View, Text, Image, TouchableOpacity, Alert, FlatList } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { auth } from "../FirebaseConfig";
//import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { styles } from "../styles";
import GradientScreen from "../components/GradientScreen";
import Button from "../components/Button";
import ActivityFeed from "../components/ActivityFeed";
import FriendRequests from "../components/FriendRequests";
import DropDownModal from "../components/DropDownModal";
import FriendsList from "../components/FriendsList";
import {MaterialCommunityIcons, FontAwesome} from "@expo/vector-icons";
import { fetchUserActivities, fetchFriendsAndRequests, acceptFriendRequest, uploadProfileImage } from "../FirebaseFunksjoner";

const Profil = () => {
    const [image, setImage] = useState(null);
    const [activities, setActivities] = useState([]);
    const [friends, setFriends] = useState([]);
    const [friendRequests, setFriendRequests] = useState([]);
    const [showRequests, setShowRequests] = useState(true);
    const [showFriends, setShowFriends] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const userId = auth.currentUser.uid;
        fetchUserActivities(userId).then(setActivities);
        fetchFriendsAndRequests(userId).then(({ friends, friendRequests }) => {
            setFriends(friends);
            setFriendRequests(friendRequests);
        });
    }, []);

    const openModal = () => {
        setModalVisible(true);
    };

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Tilgang Nektet', 'Appen har ikke tilgang til kamerarullen. Vennligst gi tilgang i innstillingene.');
            return;
        }

        // Launch av bildevelgeren
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.canceled) {
            const uri = result.assets[0].uri;
            setImage(uri);

            // Last opp bildet til Firebase Storage
            const userId = auth.currentUser.uid;
            const downloadUrl = await uploadProfileImage(uri, userId);
            console.log('Profile image downloaded: ', downloadUrl);
        }
    };

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigation.navigate("ProfilLoggInn");
        }).catch((error) => {
            console.error('Logout Failed', error);
        });
    };

    const handleFriendAccepted = (friendId) => {
        const newFriend = friendRequests.find(request => request.id === friendId);
        if (newFriend) {
            setFriends([...friends, newFriend]);
            setFriendRequests(friendRequests.filter(request => request.id !== friendId));
        }
    };


    const renderHeader = () => (
        <View style={{ paddingHorizontal: 16, paddingTop: 20 }}>
            <View style={[styles.profileHeader, { alignItems: 'center' }]}>
                <TouchableOpacity onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.profileImage} />
                    ) : (
                        <View style={styles.profileImagePlaceholder}>
                            <Text style={styles.addPictureIcon}>+</Text>
                        </View>
                    )}
                </TouchableOpacity>
                <Text style={styles.userName}>Hei {auth.currentUser.displayName || 'User'}!</Text>
            </View>
            <ActivityFeed activities={activities} />
        </View>
    );

    const renderFooter = () => (
        <View style={{ paddingHorizontal: 16, paddingTop: 20 }}>
            <FriendRequests friendRequests={friendRequests} acceptFriend={acceptFriendRequest} onFriendAccepted={handleFriendAccepted} />
            <FriendsList friends={friends} />
            <View style={{ marginTop: 300, alignItems: 'center' }}>
                <Button text="Logg ut" onPress={handleLogout} />
            </View>
        </View>
    );


    return (
        <View style={{ flex: 1 }}>
            <GradientScreen>
                <TouchableOpacity
                    onPress={() => {
                        console.log('Basic TouchableOpacity pressed');
                        setModalVisible(true);
                    }}
                    style={[styles.menuButton, {
                        position: 'absolute',
                        top: '24%',
                        right: '5%',
                        zIndex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',}]}
                >
                    <FontAwesome name="angle-down" size={24} color="white" />
                </TouchableOpacity>
                <DropDownModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)} />
                <FlatList
                    data={[]}
                    renderItem={( item ) => null}
                    ListHeaderComponent={renderHeader}
                    ListFooterComponent={renderFooter}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ flexGrow: 1 }}
                />
            </GradientScreen>
        </View>
    );
};

export default Profil;
