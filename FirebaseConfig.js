// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeServerApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    //apiKey: "AIzaSyCZEPuwt1QvvdyIQ_c09F068WBGbpP0Cg0",
    apiKey: "AIzaSyANF7_u7cQwdkxI6XFupp0PLYv2I607PSA",
    authDomain: "lifesaver-419c4.firebaseapp.com",
    projectId: "lifesaver-419c4",
    storageBucket: "lifesaver-419c4.appspot.com",
    messagingSenderId: "1:111694861959:web:69695be7db75cfd27a8a22",
    appId: "1:111694861959:web:69695be7db75cfd27a8a22",
    measurementId: "G-HNMLKWJ6YK",
};


export const firebaseApp = initializeApp({
    //apiKey: "AIzaSyCZEPuwt1QvvdyIQ_c09F068WBGbpP0Cg0",
    apiKey: "AIzaSyANF7_u7cQwdkxI6XFupp0PLYv2I607PSA",
    authDomain: "lifesaver-419c4.firebaseapp.com",
    projectId: "lifesaver-419c4",
    storageBucket: "lifesaver-419c4.appspot.com",
    messagingSenderId: "1:111694861959:web:69695be7db75cfd27a8a22",
    appId: "1:111694861959:web:69695be7db75cfd27a8a22",
    measurementId: "G-HNMLKWJ6YK"
});


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
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
