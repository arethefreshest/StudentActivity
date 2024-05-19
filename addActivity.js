import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from './FirebaseConfig';

export const addActivity = async (activityData) => {
    try {
        const activityRef = await addDoc(collection(db, "calendar"), activityData);

        for (const friend of activityData.selectedFriends) {
            const friendActivityData = {
                ...activityData,
                email: friend.email, // Assume each friend object contains an 'email' field
            };
            await setDoc(doc(db, "calendar", `${activityRef.id}-${friend.id}`), friendActivityData);
        }

        console.log("Activity added successfully");
        return true;
    } catch (error) {
        console.error("Error adding activity: ", error);
        return false;
    }
};