import { initializeApp } from "firebase/app";
import { initializeServerApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, initializeAuth, browserLocalPersistence, getReactNativePersistence, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import Constants from "expo-constants";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
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

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
let auth;
if (Constants.platform?.web) {
    // Web-specific initialization logic
    auth = getAuth(app);
    auth.setPersistence(browserLocalPersistence)
        .then(() => {
            console.log('Auth state persisted in current session');
        })
        .catch((error) => {
            // Handle errors
            console.error('Error setting Auth state persistence:', error);
        });
} else {
    // Initialize Auth for native platforms
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
}

/*const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});*/

// Initialize Storage
const storage = getStorage(app);

// Initialize Analytics
isSupported().then((supported) => {
    if (supported) {
        const analytics = getAnalytics(app);
    } else {
        console.log('Firebase Analytics not supported in this environment');
    }
});

export { app, db, auth, storage};
