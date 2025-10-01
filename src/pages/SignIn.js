import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";

import * as Font from "expo-font";
import { StylesOnboarding } from "../styles/StylesOnboarding";
import { stylesSign } from "../styles/StylesSign";

import { useNavigation } from "@react-navigation/native";

import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SignIn() {
  const navigation = useNavigation();

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    Font.loadAsync({
      Playfair: require("../assets/fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf"),
      Lato: require("../assets/fonts/Lato/Lato-Italic.ttf"),
      Poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
      PoppinsBold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  const handleLogin = async () => {
    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3001/auth/login", {
        email,
        senha,
      });

      console.log("KAKAKAKAKA", res.data.message);

      const token = res.data.token;

      await AsyncStorage.setItem("@token", token);

      navigation.navigate("DashLocal");
      setEmail("");
      setSenha("");
    } catch (error) {
      if (error.response) {
        const msg = error.response.data.error;
        setMessageError(msg);

        setTimeout(() => setMessageError(""), 3000);

        console.log("Erro de login:", msg);
      } else {
        setMessageError("Erro de conexão com o servidor!");
        setTimeout(() => setMessageError(""), 3000);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!fontsLoaded) return null;

  return (
    <ImageBackground
      source={require("../assets/images/agro.jpg")}
      style={stylesSign.container}
      resizeMode="cover"
      blurRadius={15}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          padding: 40,
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons
          name="barley"
          size={50}
          color="white"
          style={{ marginBottom: 20 }}
        />
        <Text style={[stylesSign.title, { fontFamily: "Playfair" }]}>
          Estação Akira
        </Text>
        <Text style={{ fontFamily: "Lato", color: "#bebebe", fontSize: 18 }}>
          Faça seu login
        </Text>

        <View style={{ marginTop: 40 }}>
          <TextInput
            style={stylesSign.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={"#bebebe"}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            style={stylesSign.input}
            placeholder="Senha"
            placeholderTextColor={"#bebebe"}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          {messageError ? (
            <Text style={{ color: "red", marginTop: 10 }}>{messageError}</Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2E7D32",
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 40,
            marginBottom: 40,
          }}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={[StylesOnboarding.txt2, { fontFamily: "Poppins" }]}>
            Entrar
          </Text>
        </TouchableOpacity>
        <View style={StylesOnboarding.viewSignUp}>
          <Text style={{ fontFamily: "Lato", fontSize: 15, color: "#fff" }}>
            Ainda não tem conta
          </Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "#bebebe", fontFamily: "PoppinsBold" }}>
              Cadastre-se
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
