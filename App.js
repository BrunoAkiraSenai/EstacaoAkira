import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "./src/pages/Onboarding";
import SignUp from "./src/pages/SignUp";
import SignIn from "./src/pages/SignIn";
import DashLocal from "./src/pages/DashLocal";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="DashLocal" component={DashLocal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
