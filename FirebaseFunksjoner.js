import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, getDocs, collection } from "firebase/firestore";
import { auth, db} from "./FirebaseConfig";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

export const registerUser = async (email, password, fullName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const userRef = doc(db, "users", userCredential.user.uid);

    await setDoc(userRef, {
        fullName,
        email
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
};

export const fetchUserActivities = async (userId) => {
    const userActivitiesRef = collection(db, `users/${userId}/activities`);
    const querySnapshot = await getDocs(userActivitiesRef);
    const userActivities = [];
    
    for (const docSnap of querySnapshot.docs) {
        const activityData = docSnap.data();
        if (activityData.linkedActivityId) {
            const activityRef = doc(db, `Activities/${activityData.linkedActivityId}`);
            const activityDoc = await getDoc(activityRef);
            if (activityDoc.exists()) {
                userActivities.push({
                    ...activityDoc.data(),
                    data: activityData.data,
                    time: activityData.time,
                    participants: activityData.participants
                });
            }
        }
    }
    return userActivities;
};

export const fetchFriendsAndRequests = async (userId) => {
    const userDoc = await getDoc(doc(db, `users/${userId}`));
    const data = userDoc.data();
    return {
        friends: data.friends || [],
        friendRequests: data.friendRequests || []
    };
};