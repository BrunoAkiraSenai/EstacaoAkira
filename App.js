import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import SignIn from "./src/pages/SingIn";
// import SignUp from "./src/pages/SingUp";

import { NavigationContainer } from "@react-navigation/native"; // corrigido aqui
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useState } from "react";

const Stack = createNativeStackNavigator(); // adicionado

export default function App() {
  0
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
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
