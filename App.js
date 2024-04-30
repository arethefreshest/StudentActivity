import React, { useEffect } from 'react';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppNavigator from "./AppNavigator";
import GradientScreen from "./components/GradientScreen";
import {AuthProvider} from "./AuthContext";
import FontLoader from "./FontLoader";

export default function App() {
    return (
        <FontLoader>
            <GradientScreen>
                <AuthProvider>
                    <AppNavigator />
                </AuthProvider>
            </GradientScreen>
        </FontLoader>
  );
}
