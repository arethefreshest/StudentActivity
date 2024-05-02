import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ActivityFilter from "./components/ActivityFilter";
import Activities from "./components/Activities";
import ProfilLoggInn from "./screens/ProfilLoggInn";
import Profil from "./screens/Profil";
import ProfilRegistrering from "./screens/ProfilRegistrering";
import GradientScreen from "./components/GradientScreen";

// import Login from "./Login";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

function ProfilNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="ProfilLoggInn" component={ProfilLoggInn} />
            <Stack.Screen name="ProfilRegistering" component={ProfilRegistrering} />
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

// Material bottom tab navigator
function CustomTabNavigator() {
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
                // paddingBottom: 10,
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
                //headerShown: false,
                //borderTopColor: 'transparent',
                //borderTopWidth: 0
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
                options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account-outline" color={color} size={size} />,
                    unmountOnBlur: true,}}
            />
        </MaterialBottomTabs.Navigator>
    );
}

/*function Account() {
    return (
        <GradientScreen>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Filter" component={ActivityFilter} />
                <Stack.Screen name="Activities" component={Activities} />
                <Stack.Screen name="Login/Register" component={ProfilLoggInn} />
            </Stack.Navigator>
        </GradientScreen>
    );
}*/

export default function AppNavigator() {
    return (
        <NavigationContainer
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    borderBottomWidth: 0,
                    shadowColor: 'transparent',
                    elevation: 0,
                },
            }}
        >
            <CustomTabNavigator />
        </NavigationContainer>
    );
}
