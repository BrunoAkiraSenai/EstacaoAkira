import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import SignIn from "./src/pages/SingIn";
// import SignUp from "./src/pages/SingUp";

import { NavigationContainer } from "@react-navigation/native"; // corrigido aqui
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useState } from "react";

const Stack = createNativeStackNavigator(); // adicionado

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp} // corrigido aqui
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
