// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeServerApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {APIKEY, APPID, MESSAGINSENDERID, MEASURMENTID, STORAGEBUCKET, PROJECTID, AUTHDOMAIN} from "@env";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINSENDERID,
    appId: APPID,
    measurementId: MEASURMENTID,
};


/*export const firebaseApp = initializeApp({
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINSENDERID,
    appId: APPID,
    measurementId: MEASURMENTID,
});*/


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Analytics
isSupported().then((supported) => {
    if (supported) {
        const analytics = getAnalytics(app);
    } else {
        console.log('Firebase Analytics not supported in this environment');
    }
});

export { app, db, auth};
