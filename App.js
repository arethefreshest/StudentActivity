import React, { useEffect, useState } from 'react';
import AppNavigator from "./AppNavigator";
import GradientScreen from "./components/ui/GradientScreen";
import FontLoader from "./FontLoader";
import { auth } from "./firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loggedInUserId, setLoggedInUserId] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
            setLoggedInUserId(user ? user.uid : null);
        });
    }, []);

    return (
        <FontLoader>
            <GradientScreen>
                <NavigationContainer>
                    <AppNavigator isAuthenticated={isAuthenticated} loggedInUserId={loggedInUserId} />
                </NavigationContainer>
            </GradientScreen>
        </FontLoader>
    );
}