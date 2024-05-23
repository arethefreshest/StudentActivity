
import { collection, addDoc } from "firebase/firestore";
import { db } from './FirebaseConfig';

export const addActivity = async (activityData) => {
    try {
        await addDoc(collection(db, "calendar"), activityData);
        console.log("Activity added successfully");
        return true;
    } catch (error) {
        console.error("Error adding activity: ", error);
        return false;
    }
};