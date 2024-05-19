import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as MediaLibrary from 'expo-media-library';
import { auth, db } from "../FirebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { styles } from "../styles";
import GradientScreen from "../components/GradientScreen";
import Button from "../components/Button";
import ActivityFeed from "../components/ActivityFeed";
import FriendRequests from "../components/FriendRequests";
import DropDownModal from "../components/DropDownModal";
import FriendsList from "../components/FriendsList";
import ProfilSettings from "../components/ProfilSettings";
import { FontAwesome } from '@expo/vector-icons';
import { fetchUserActivities, fetchFriendsAndRequests, acceptFriendRequest, uploadProfileImage } from "../FirebaseFunksjoner";

const Profil = ({ loggedInUserId }) => {
    const [image, setImage] = useState(null);
    const [activities, setActivities] = useState([]);
    const [friends, setFriends] = useState([]);
    const [friendRequests, setFriendRequests] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Feed');
    const navigation = useNavigation();
    const route = useRoute();
    const friend = route.params?.friend || null;
    const isCurrentUser = !friend || friend.id === loggedInUserId;

    const fetchData = async (userId) => {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
            const data = userDoc.data();
            setImage(data.profileImageUrl || null);
        }
        fetchUserActivities(userId).then(setActivities);
        fetchFriendsAndRequests(userId).then(({ friends, friendRequests }) => {
            setFriends(friends);
            if (isCurrentUser) {
                setFriendRequests(friendRequests);
            }
        });
    };

    useFocusEffect(
        React.useCallback(() => {
            const userId = isCurrentUser ? loggedInUserId : friend.id;
            if (userId) {
                fetchData(userId);
            }
        }, [friend, loggedInUserId])
    );

    const openModal = () => {
        setModalVisible(true);
    };

    const pickImage = async () => {
        console.log('Requesting media library permissions...');
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Tilgang Nektet', 'Appen har ikke tilgang til kamerarullen. Vennligst gi tilgang i innstillingene.');
            return;
        }

        console.log('Launching image picker...');
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5, // Reduce the quality to lower memory usage
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            console.log('Image selected:', uri);

            // Get image details using MediaLibrary
            const asset = await MediaLibrary.createAssetAsync(uri);
            console.log('Image Details:', asset);

            const { width, height, fileSize } = asset;

            // Log image details
            console.log(`Original width: ${width}, Original height: ${height}, File size: ${fileSize} bytes`);

            // Resize the image while maintaining aspect ratio
            const newWidth = Math.min(width, 800); // Set maximum width to 800 pixels
            const newHeight = (newWidth / width) * height; // Maintain aspect ratio

            const manipulatedImage = await ImageManipulator.manipulateAsync(
                uri,
                [{ resize: { width: newWidth, height: newHeight } }],
                { compress: 0.5, format: ImageManipulator.SaveFormat.PNG }
            );

            console.log('Resized Image:', manipulatedImage);

            setImage(manipulatedImage.uri);

            const userId = auth.currentUser.uid;
            try {
                console.log('Uploading profile image...');
                const downloadUrl = await uploadProfileImage(manipulatedImage.uri, userId);
                console.log('Profile image uploaded:', downloadUrl);
                setImage(downloadUrl); // Update the state with the new download URL
            } catch (error) {
                console.error('Error uploading profile image:', error);
                Alert.alert('Feil', 'Kunne ikke laste opp profilbildet');
            }
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

    const renderContent = () => {
        switch (selectedOption) {
            case 'Feed':
                return <ActivityFeed activities={activities} />;
            case 'ProfilInnstillinger':
                return isCurrentUser ? <ProfilSettings /> : null;
            case 'Venner':
                return (
                    <>
                        <FriendsList friends={friends} />
                        {isCurrentUser && (
                            <FriendRequests friendRequests={friendRequests}
                                            acceptFriend={acceptFriendRequest}
                                            onFriendAccepted={handleFriendAccepted}
                            />
                        )}
                        {isCurrentUser && (
                            <View style={{ marginTop: '50%', alignItems: 'center' }}>
                                <Button text="Logg ut" onPress={handleLogout} />
                            </View>
                        )}
                    </>
                );
            default:
                return <ActivityFeed activities={activities} />;
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <GradientScreen>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={[styles.menuButton, {
                        position: 'absolute',
                        top: '24%',
                        right: '5%',
                        zIndex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }]}
                >
                    <FontAwesome name="angle-down" size={24} color="white" />
                </TouchableOpacity>
                <DropDownModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onSelectOption={setSelectedOption}
                    onLogOut={handleLogout}
                />
                <View style={[styles.profileHeader, { alignItems: 'center'}]}>
                    {isCurrentUser && (
                        <TouchableOpacity onPress={pickImage}>
                            {image ? (
                                <Image source={{ uri: image }} style={styles.profileImage} />
                            ) : (
                                <View style={styles.profileImagePlaceholder}>
                                    <Text style={styles.addPictureIcon}>+</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    )}
                    {!isCurrentUser && friend.profileImageUrl && (
                        <Image source={{ uri: friend.profileImageUrl }} style={styles.profileImage} />
                    )}
                    <Text style={styles.userName}>{isCurrentUser ? `Hei ${auth.currentUser.displayName || 'User'}` : friend.fullName}</Text>
                </View>
                {renderContent()}
            </GradientScreen>
        </View>
    );
};

export default Profil;
