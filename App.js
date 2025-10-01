import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "./src/pages/Onboarding";
import SignUp from "./src/pages/SignUp";
import SignIn from "./src/pages/SignIn";
import DashLocal from "./src/pages/DashLocal";
import DashboardLSPA from "./src/pages/DashboardLSPA";
import DashPrincipal from "./src/pages/DashPrincipal";
import Calendario from "./src/pages/calendario";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Calendario"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Calendario" component={Calendario} />
        <Stack.Screen name="DashPrincipal" component={DashPrincipal} />
        <Stack.Screen name="DashboardLSPA" component={DashboardLSPA} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="DashLocal" component={DashLocal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
