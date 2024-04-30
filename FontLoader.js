import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

const FontLoader = ({ children }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                'Roboto-Flex': require('./assets/fonts/RobotoFlex.ttf'),
            });
            setFontsLoaded(true);
        })();
    }, []);

    if (!fontsLoaded) {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }

    return children;
};

export default FontLoader;