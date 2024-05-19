import { Asset } from 'expo-asset';
import { useEffect, useState } from 'react';
import { SplashScreen } from 'expo-splash-screen';

const loadRobotoFlex = async () => {
    // Load the Roboto Flex font using expo-asset
    await Asset.loadAsync([require('assets/fonts/RobotoFlex.ttf')]);
};

const useRobotoFlex = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadFont = async () => {
            await loadRobotoFlex();
            setLoaded(true); // Mark as loaded once font is ready
        };

        SplashScreen.preventAutoHideAsync(); // Prevent splash screen from hiding until font is loaded
        loadFont(); // Start loading the font
    }, []);

    return loaded; // Return the font loading status
};

export default useRobotoFlex; // Export the custom hook