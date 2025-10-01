import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import { StylesOnboarding } from "../styles/StylesOnboarding";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import * as Font from "expo-font";
import { useState, useEffect } from "react";

export default function Onboarding() {
  const navigation = useNavigation();

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Playfair: require("../assets/fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf"),
      Lato: require("../assets/fonts/Lato/Lato-Italic.ttf"),
      Poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
      PoppinsBold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null; // ou um loading se preferir
  }

  return (
    <ImageBackground
      style={StylesOnboarding.container}
      source={require("../assets/images/agro.jpg")}
      blurRadius={5}
    >
      <MaterialCommunityIcons name="barley" size={180} color="white" />

      <Text
        style={[
          StylesOnboarding.title,
          { fontFamily: "Playfair", marginBottom: 30 },
        ]}
      >
        Bem-Vindo
      </Text>

      <Text style={[StylesOnboarding.txt, { fontFamily: "Lato" }]}>
        A agricultura é
      </Text>
      <Text style={[StylesOnboarding.txt, { fontFamily: "Lato" }]}>
        a arte de saber esperar.
      </Text>

      <TouchableOpacity
        style={StylesOnboarding.btn}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={[StylesOnboarding.txt2, { fontFamily: "Poppins" }]}>
          Login com Email
        </Text>
      </TouchableOpacity>

      <View style={StylesOnboarding.viewSignUp}>
        <Text
          style={[StylesOnboarding.txt2, { fontFamily: "Lato", fontSize: 16 }]}
        >
          Não tem cadastro?
        </Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{ color: "#fff", fontFamily: "PoppinsBold", fontSize: 14 }}
          >
            Cadastrar
          </Text>
        </Pressable>
      </View>

      <StatusBar hidden />
    </ImageBackground>
  );
}
