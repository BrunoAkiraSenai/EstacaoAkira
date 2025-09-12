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

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import InputComp from "../components/InputComp";

import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={stylesSign.container}
      source={require("../images/trator.jpg")}
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
          name="weather-cloudy"
          size={50}
          color="white"
          style={{ marginBottom: 20 }}
        />
        <Text style={stylesSign.title}>Sign Up</Text>
        <Text style={stylesSign.text}>Cadastre-se na Estação Akira!</Text>

        <View style={{ marginTop: 80 }}>
          <TextInput
            style={stylesSign.input}
            placeholderTextColor={"#bebebe"}
            placeholder="Name"
          />
          <InputComp textPlaceholder={"digite seu email"} password={false} />
          <InputComp textPlaceholder={"Password"} password={true} />
          <InputComp textPlaceholder={"Nome do usuário"} password={false} />
        </View>

        <TouchableOpacity
          style={[StylesOnboarding.btn, { marginTop: 80, width: "100%" }]}
        >
          <Text style={StylesOnboarding.txt2}>Sign Up</Text>
        </TouchableOpacity>

        <View style={StylesOnboarding.viewSignUp}>
          <Text style={StylesOnboarding.txt2}>Já tem conta?</Text>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Sign In</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar hidden />
    </ImageBackground>
  );
}
