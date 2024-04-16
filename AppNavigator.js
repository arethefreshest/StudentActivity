import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

function OneStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Screen1" component={Screen1} />
        </Stack.Navigator>
    );
}

function TwoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
    );
}

function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="OneStack"
                component={OneStack}
                options={{
                    tabBarLabel: "Screen 1",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="TwoStack"
                        component={TwoStack}
                        options={{ tabBarLabel: "Screen 2",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="bell" color={color} size={26} />
                            ),
                        }}
            />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <MaterialBottomTabs.Navigator>
                <MaterialBottomTabs.Screen name="BottomTabs" component={BottomTabs} options={{ tabBarIcon: 'home-account', }} />
            </MaterialBottomTabs.Navigator>
        </NavigationContainer>
    );
}