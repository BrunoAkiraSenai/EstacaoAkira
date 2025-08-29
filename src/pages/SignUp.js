import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";

import { StatusBar } from "expo-status-bar";

// Import Styles!
import { stylesSign } from "../styles/StylesSign";

import { StylesOnboarding } from "../styles/StylesOnboarding";

import { useNavigation } from "@react-navigation/native";

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import InputComp from "../components/InputComp";

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={stylesSign.container}
      source={require("../images/27calor.jpg")}
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
        <Text style={stylesSign.title}>Sign Up</Text>
        <Text style={stylesSign.text}>
          Sign up now for free and start meditating, and explore Medic.
        </Text>

        <View style={{ marginTop: 80 }}>
          <TextInput
            style={stylesSign.input}
            placeholderTextColor={"#bebebe"}
            placeholder="Name"
          />
          <InputComp textPlaceholder={"Email Address"} password={false} />
          <InputComp textPlaceholder={"Password"} password={true} />
        </View>

        <TouchableOpacity
          style={[StylesOnboarding.btn, { marginTop: 80, width: "100%" }]}
        >
          <Text style={StylesOnboarding.txt2}>Sign Up</Text>
        </TouchableOpacity>

        <View style={StylesOnboarding.viewSignUp}>
          <Text style={StylesOnboarding.txt2}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Sign In</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar hidden />
    </ImageBackground>
  );
}
