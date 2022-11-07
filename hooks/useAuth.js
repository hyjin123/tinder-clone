import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";

const AuthContext = createContext({});

// AuthProvider is passing down information as a global data layer, all children can access this data

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: "sean" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
