import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

// Import Styles!
import { stylesSign } from "../styles/StylesSign";

import { StylesOnboarding } from "../styles/StylesOnboarding";

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Import Component TextInput
import InputComp from "../components/InputComp";

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={stylesSign.container}
      source={require("../images/agro.jpg")}
      blurRadius={15}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#00000088",
          padding: 40,
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons
          name="flower-tulip-outline"
          size={50}
          color="white"
          style={{ marginBottom: 20 }}
        />
        <Text style={stylesSign.title}>Sign In</Text>
        <Text style={stylesSign.text}>
          Sign in now to acces your excercises and saved music
        </Text>

        <View style={{ marginTop: 80 }}>
          <InputComp textPlaceholder={"Email Address"} password={false} />
          <InputComp textPlaceholder={"Password"} password={true} />

          <Pressable style={{ position: "absolute", right: 0, bottom: -20 }}>
            <Text style={{ color: "grey" }}>Forgot password?</Text>
          </Pressable>
        </View>

        <TouchableOpacity
          style={[StylesOnboarding.btn, { marginTop: 80, width: "100%" }]}
        >
          <Text style={StylesOnboarding.txt2}>LOGIN</Text>
        </TouchableOpacity>

        <View style={StylesOnboarding.viewSignUp}>
          <Text style={StylesOnboarding.txt2}>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar hidden />
    </ImageBackground>
  );
}
