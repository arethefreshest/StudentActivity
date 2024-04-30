import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_400Regular_Italic, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

const FontLoader = ({ children }) => {
    let [fontsLoaded] = useFonts({
        'Roboto-Regular': Roboto_400Regular,
        'Roboto-Italic': Roboto_400Regular_Italic,
        'Roboto-Medium': Roboto_500Medium,
        'Roboto-Bold': Roboto_700Bold,
    });

    // Consistently return either a loading state or children; no conditional hooks.
    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return children;
};

export default FontLoader;
