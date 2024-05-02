import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ActivityFilter from "./components/ActivityFilter";
import Activities from "./components/Activities";
import ProfilLoggInn from "./screens/ProfilLoggInn";
import Profil from "./screens/Profil";
import ProfilRegistrering from "./screens/ProfilRegistrering";

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

function AppNavigator({ isAuthenticated }) {
    function ProfilNavigator() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    <Stack.Screen name="ProfilHome" component={Profil} />
                ) : (
                    <>
                        <Stack.Screen name="ProfilLoggInn" component={ProfilLoggInn} />
                        <Stack.Screen name="ProfilRegistering" component={ProfilRegistrering} />
                    </>
                )}
            </Stack.Navigator>
        );
    }

    function Home() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Filter" component={ActivityFilter} />
                <Stack.Screen name="Activities" component={Activities} />
            </Stack.Navigator>
        );
    }

    function Activity() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Filter" component={ActivityFilter} />
                <Stack.Screen name="Activities" component={Activities} />
            </Stack.Navigator>
        );
    }

    return (
        <MaterialBottomTabs.Navigator
            barStyle={{
                backgroundColor: 'transparent', // Allows gradient to show through
                borderTopWidth: 0, // Removes top border
                borderColor: 'transparent', // Ensures there's no border
                position: 'absolute',
                bottom: 0,
                elevation: 0, // Eliminates shadow effect
                shadowOffset: { height: 0, width: 0 }, // Removes any shadow offset
                shadowOpacity: 0, // Removes shadow opacity
            }}
            screenOptions={{
                tabBarStyle: {
                    borderTopWidth: 0,
                    shadowColor: 'transparent',
                    elevation: 0,
                },
                headerStyle: {
                    borderBottomWidth: 0,
                    shadowColor: 'transparent',
                    elevation: 0,
                }
            }}
        >
            <MaterialBottomTabs.Screen
                name="Home"
                component={Home}
                options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home-outline" color={color} size={size} /> }}
            />
            <MaterialBottomTabs.Screen
                name="Activity"
                component={Activity}
                options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus" color={color} size={size} /> }}
            />
            <MaterialBottomTabs.Screen
                name="Profil"
                component={ProfilNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account-outline" color={color} size={size} />,
                    unmountOnBlur: true
                }}
            />
        </MaterialBottomTabs.Navigator>
    );
}

export default AppNavigator;
