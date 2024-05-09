import React, { useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import AppNavigator from "./AppNavigator";
import GradientScreen from "./components/GradientScreen";
import FontLoader from "./FontLoader";
import { auth } from "./FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });

        return unsubscribe;
    }, []);

    return (
        <FontLoader>
            <GradientScreen>
                <NavigationContainer>
                    <AppNavigator isAuthenticated={isAuthenticated} />
                </NavigationContainer>
            </GradientScreen>
        </FontLoader>
  );
}
