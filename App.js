/*import React from "react";
import AppNavigator from "./AppNavigator";

export default function App() {
  return <AppNavigator />;
}*/

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return <AppNavigator/>;
}
