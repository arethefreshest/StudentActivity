import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import Activities from './components/Activities'
import ActivityFilter from './components/ActivityFilter'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Filter" component={ActivityFilter} />
          <Stack.Screen name="Activities" component={Activities} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
