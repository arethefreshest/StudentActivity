import { initializeApp } from "firebase/app";
import { initializeServerApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAuth } from "firebase/auth";
import {APIKEY, APPID, MESSAGINSENDERID, MEASURMENTID, STORAGEBUCKET, PROJECTID, AUTHDOMAIN} from "@env";

// Define Firebase configuration
const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINSENDERID,
    appId: APPID,
    measurementId: MEASURMENTID,
};

// Initialize Firebase, Firestore and Auth
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app);

// Initialize Analytics
isSupported().then((supported) => {
    if (supported) {
        const analytics = getAnalytics(app);
    } else {
        console.log('Firebase Analytics not supported in this environment');
    }
});

export { app, db, auth};
