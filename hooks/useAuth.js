import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth";

const AuthContext = createContext({});

// AuthProvider is passing down information as a global data layer, all children can access this data

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {};
  return (
    <AuthContext.Provider value={{ user: null }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
