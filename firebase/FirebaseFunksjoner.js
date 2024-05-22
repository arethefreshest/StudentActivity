import {
    doc,
    setDoc,
    getDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    getDocs,
    collection,
    where,
    query
} from "firebase/firestore";
import { auth, db, storage} from "./FirebaseConfig";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// Helper function to remove undefined keys from an object
const removeUndefinedKeys = (obj) => {
    let newObj = {};
    for (let key in obj) {
        if (obj[key] !== undefined) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};

export const registerUser = async (email, password, fullName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const userRef = doc(db, "users", userCredential.user.uid);

    await setDoc(userRef, {
        fullName,
        email,
        friends: [], // Ensure friends array is initialized
        friendRequests: [] // Ensure friendRequests array is initialized
    });

    await updateProfile(userCredential.user, {
        displayName: fullName
    });

    // Subcollections for the user to reference activities and other user collections
    await setDoc(doc(db, `users/${userCredential.user.uid}/activities`, "init"), { initialized: true });
    await setDoc(doc(db, `users/${userCredential.user.uid}/friends`, "init"), { initialized: true });
    await setDoc(doc(db, `users/${userCredential.user.uid}/friendRequests`, "init"), { initialized: true });

    return userCredential.user;
};

export const searchUsers = async (searchParam) => {
    const userRef = collection(db, 'users');
    const lowerCaseSearchParam = searchParam.toLowerCase();

    // Create queries for both email and full name
    const emailQuery = query(userRef, where('email', '==', lowerCaseSearchParam));
    const fullNameQuery = query(userRef, where('fullName', '>=', lowerCaseSearchParam), where('fullName', '<=', lowerCaseSearchParam + '\uf8ff'));
    const fullNameOriginalQuery = query(userRef, where('fullName', '>=', searchParam), where('fullName', '<=', searchParam + '\uf8ff'));

    // Execute all of these queries
    const [emailSnapShot, fullNameSnapShot, fullNameOriginalSnapShot] = await Promise.all([
        getDocs(emailQuery),
        getDocs(fullNameQuery),
        getDocs(fullNameOriginalQuery)
    ]);

    const users = new Map();

    // Add email results to the map
    emailSnapShot.forEach((doc) => {
        users.set(doc.id, { id: doc.id, ...doc.data() });
    });

    // Add name results to the map
    fullNameSnapShot.forEach((doc) => {
        users.set(doc.id, { id: doc.id, ...doc.data() });
    });

    // Add original case name results to the map
    fullNameOriginalSnapShot.forEach((doc) => {
        users.set(doc.id, { id: doc.id, ...doc.data() });
    });

    return Array.from(users.values());


    /*const q = query(userRef, where('email', '==', searchParam));
    const querySnapshot = await getDocs(q);

    //const users = [];
    querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
    });

    //return users;*/
};
export const sendFriendRequest = async (friendId) => {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const friendRef = doc(db, 'users', friendId);

    /*await updateDoc(userRef, {
        friendRequests: arrayUnion(friendId)
    });*/

    await updateDoc(friendRef, {
        friendRequests: arrayUnion(user.uid)
    });
}

export const acceptFriendRequest = async (friendId) => {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const friendRef = doc(db, 'users', friendId);

    // Add each other to friends list
    await updateDoc(userRef, {
        friends: arrayUnion(friendId),
        friendRequests: arrayRemove(friendId)
    });

    await updateDoc(friendRef, {
        friends: arrayUnion(user.uid)
    });

    return friendId;
};

export const fetchUserActivities = async (userId) => {
    const userActivitiesRef = collection(db, `users/${userId}/activities`);
    const querySnapshot = await getDocs(userActivitiesRef);
    const userActivities = [];

    for (const docSnap of querySnapshot.docs) {
        const activityData = docSnap.data();
        if (activityData.linkedActivityId) {
            const activityRef = doc(db, `calendar/${activityData.linkedActivityId}`);
            const activityDoc = await getDoc(activityRef);
            if (activityDoc.exists()) {
                userActivities.push({
                    ...activityDoc.data(),
                    data: activityData.data,
                    time: activityData.time,
                    participants: activityData.participants
                });
            }
        } else {
            userActivities.push(activityData); // Push activity data even if there's no linkedActivityId
        }
    }
    console.log("Fetched user activities:", userActivities); // Log fetched activities
    return userActivities;
};

export const fetchFriendsAndRequests = async (userId) => {
    const userDoc = await getDoc(doc(db, `users/${userId}`));
    if (!userDoc.exists()) {
        console.error("User document does not exist");
        return { friends: [], friendRequests: [] };
    }
    const data = userDoc.data() || {};

    const friends = data.friends || [];
    const friendRequests = data.friendRequests || [];

    // Fetch full names for each friend request
    const friendRequestDetails = await Promise.all(friendRequests.map(async (requestId) => {
        const requestDoc = await getDoc(doc(db, `users/${requestId}`));
        return { id: requestId, ...requestDoc.data() };
    }));

    // Fetch full names for each friend
    const friendDetails = await Promise.all(friends.map(async (friendId) => {
        const friendDoc = await getDoc(doc(db, `users/${friendId}`));
        return { id: friendId, ...friendDoc.data() };
    }));

    return {
        friends: friendDetails,
        friendRequests: friendRequestDetails
    };
};

export const uploadProfileImage = async (uri, userId) => {
    if (!uri) return null;

    try {
        console.log('Fetching image from URI...');
        const response = await fetch(uri);
        const blob = await response.blob();

        console.log('Uploading image to Firebase Storage...');
        const storageRef = ref(storage, `profileImages/${userId}`);
        await uploadBytes(storageRef, blob);

        console.log('Getting download URL...');
        const downloadURL = await getDownloadURL(storageRef);

        console.log('Updating Firestore document...');
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, removeUndefinedKeys({
            profileImageUrl: downloadURL
        }));

        return downloadURL;
    } catch (error) {
        console.error('Error uploading profile image:', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
};