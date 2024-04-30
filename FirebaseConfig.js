// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import Constants  from "expo-constants";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const { APIKEY, APPID, MESSAGING_SENDER_ID, MEASUREMENT_ID } = Constants.expoConfig.extra;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: "lifesaver-419c4.firebaseapp.com",
    projectId: "lifesaver-419c4",
    storageBucket: "lifesaver-419c4.appspot.com",
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APPID,
    measurementId: MEASUREMENT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics
isSupported().then((supported) => {
    if (supported) {
        const analytics = getAnalytics(app);
    } else {
        console.log('Firebase Analytics not supported in this environment');
    }
});

// Initialize Auth with persistence
const auth = getAuth(app);

export { app, auth, db };
