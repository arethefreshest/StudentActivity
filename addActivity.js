import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from './FirebaseConfig';

export const addActivity = async (activityData) => {
    try {
        const activityRef = await addDoc(collection(db, "calendar"), activityData);

        // Also add the activity to each selected friend's calendar
        for (const friend of activityData.selectedFriends) {
            if (friend.email) {
                const friendActivityData = {
                    ...activityData,
                    email: friend.email,
                };
                await setDoc(doc(db, "calendar", `${activityRef.id}-${friend.id}`), friendActivityData);
            } else {
                console.warn(`Skipping friend with id ${friend.id} due to missing email`);
            }
        }

        console.log("Activity added successfully");
        return true;
    } catch (error) {
        console.error("Error adding activity: ", error);
        return false;
    }
};