import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ActivityFilter from "./components/ActivityFilter";
import Activities from "./components/Activities";
import Login from "./components/Login";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Filter" component={ActivityFilter} />
            <Stack.Screen name="Activities" component={Activities} />
        </Stack.Navigator>
    );
}

function Activity() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Filter" component={ActivityFilter} />
            <Stack.Screen name="Activities" component={Activities} />
        </Stack.Navigator>
    );
}

function Account() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login/Register" component={Login} />
        </Stack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <MaterialBottomTabs.Navigator>
                <MaterialBottomTabs.Screen name="Hjem" component={Home} options={{tabBarIcon: "home-outline", color: "blue"}} />
                <MaterialBottomTabs.Screen name="Legg til" component={Activity} options={{tabBarIcon: "plus"}} />
                <MaterialBottomTabs.Screen name="Konto" component={Login} options={{tabBarIcon: "account-outline"}} />
            </MaterialBottomTabs.Navigator>
        </NavigationContainer>
    );
}