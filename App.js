/*import React from "react";
import AppNavigator from "./AppNavigator";

export default function App() {
  return <AppNavigator />;
}*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import Activities from './components/Activities'
import ActivityFilter from './components/ActivityFilter'
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppNavigator/>
  );
}
