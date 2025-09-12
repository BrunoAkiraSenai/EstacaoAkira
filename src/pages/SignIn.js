import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";

import { StylesOnboarding } from "../styles/StylesOnboarding"; // ajuste o caminho
import { stylesSign } from "../styles/StylesSign";

import { useNavigation } from "@react-navigation/native";

import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

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

      const token = res.data.token;

      await AsyncStorage.setItem("@token", token);

      navigation.navigate("Onboarding");
      setEmail("");
      setSenha("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../images/agro.jpg")}
      style={stylesSign.container}
      resizeMode="cover"
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
          name="barley"
          size={50}
          color="white"
          style={{ marginBottom: 20 }}
        />
        <Text style={stylesSign.title}>Estação Akira</Text>
        <Text style={stylesSign.text}>O Site Perfeito para o Clima</Text>

        {/* Formulário */}
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

          <Pressable style={{ position: "absolute", right: 0, bottom: -20 }}>
            <Text style={{ color: "grey" }}>Forgot password?</Text>
          </Pressable>
        </View>

        {/* Botão de entrar */}
        <TouchableOpacity
          style={[StylesOnboarding.btn, { marginTop: 80, width: "100%" }]}
          onPress={handleLogin}
          disabled={loading} // corrija o nome da rota
        >
          <Text style={StylesOnboarding.txt2}>ENTRAR</Text>
        </TouchableOpacity>
        <View style={StylesOnboarding.viewSignUp}>
          <Text style={StylesOnboarding.txt2}>Ainda não tem conta</Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "grey" }}>Cadastre-se</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
