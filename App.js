import React, { useEffect } from 'react';
import AppNavigator from "./AppNavigator";
import GradientScreen from "./components/GradientScreen";
import FontLoader from "./FontLoader";

export default function App() {
    return (
        <FontLoader>
            <GradientScreen>
                    <AppNavigator />
            </GradientScreen>
        </FontLoader>
  );
}
