import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

// Import Styles!
import { StylesOnboarding } from "../styles/StylesOnboarding";

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={StylesOnboarding.container}
      source={require("../images/agro.jpg")}
      blurRadius={5}
    >
      <MaterialCommunityIcons name="barley" size={200} color="white" />

      <Text style={StylesOnboarding.title}>Bem-Vindo</Text>

      <Text style={StylesOnboarding.txt}>A agricultura é</Text>
      <Text style={StylesOnboarding.txt}>a arte de saber esperar.</Text>

      <TouchableOpacity
        style={StylesOnboarding.btn}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={StylesOnboarding.txt2}>Login com Email</Text>
      </TouchableOpacity>

      <View style={StylesOnboarding.viewSignUp}>
        <Text style={StylesOnboarding.txt2}>Não tem cadastro?</Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{ fontWeight: "bold", color: "#fff", fontStyle: "italic" }}
          >
            Cadastrar
          </Text>
        </Pressable>
      </View>

      <StatusBar hidden />
    </ImageBackground>
  );
}
