import React from 'react';
import AppNavigator from "./AppNavigator";
import { AuthProvider } from "./AuthContext";

export default function App() {
  return (
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
  );
}
