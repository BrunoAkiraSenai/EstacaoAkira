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

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

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
        <Text style={stylesSign.title}>Estação Akira</Text>
        <Text style={stylesSign.text}>Entrar</Text>

        <View style={{ marginTop: 40 }}>
          <Text style={{ color: "#fff", marginTop: 15 }}>Email *</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={[stylesSign.input, { flex: 1 }]}
              placeholderTextColor="#bebebe"
              placeholder="Seu Email"
              value={email}
              onChangeText={validateEmail}
            />
            {email.length > 0 && (
              <MaterialCommunityIcons
                name={emailValid ? "check-circle" : "close-circle"}
                size={20}
                color={emailValid ? "green" : "red"}
              />
            )}
          </View>
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
          style={[StylesOnboarding.btn, { marginTop: 80, width: "100%" }]}
          onPress={handleLogin}
          disabled={loading}
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
