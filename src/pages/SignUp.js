import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { stylesSign } from "../styles/StylesSign";
import { StylesOnboarding } from "../styles/StylesOnboarding";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import axios from "axios";

export default function SignUp() {
  const navigation = useNavigation();

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    Font.loadAsync({
      Playfair: require("../assets/fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf"),
      Lato: require("../assets/fonts/Lato/Lato-Italic.ttf"),
      Poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
      PoppinsBold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  const validateName = (text) => {
    setNome(text);
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/;
    setNameValid(regex.test(text));
  };

  const validateEmail = (text) => {
    setEmail(text);
    const regex = /\S+@\S+\.\S+/;
    setEmailValid(regex.test(text));
  };

  const validatePassword = (text) => {
    setSenha(text);

    if (text.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres");
    } else if (!/[A-Z]/.test(text)) {
      setPasswordError("A senha deve conter pelo menos 1 letra maiúscula");
    } else if (!/[0-9]/.test(text)) {
      setPasswordError("A senha deve conter pelo menos 1 número");
    } else {
      setPasswordError("");
    }
  };

  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    if (!nameValid || !emailValid || passwordError.length > 0) {
      Alert.alert("Erro", "Campos inválidos!");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        nome,
        email,
        senha,
      });

      if (res.data.message == "Usuário criado com sucesso!") {
        setNome("");
        setEmail("");
        setSenha("");
        navigation.navigate("SignIn");
      }
      ("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  if (!fontsLoaded) return null;

  return (
    <ImageBackground
      style={stylesSign.container}
      source={require("../assets/images/trator.jpg")}
      blurRadius={15}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            width: "100%",
            minHeight: "100%",
            padding: 40,
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="barley" size={50} color="white" />

          <Text style={[stylesSign.title, { fontFamily: "Playfair" }]}>
            Cadastrar
          </Text>
          <Text style={{ fontFamily: "Lato", color: "#bebebe", fontSize: 18 }}>
            Faça seu cadastro
          </Text>

          <View style={{ marginTop: 40 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 300 }}
            >
              <TextInput
                style={[stylesSign.input, { flex: 1 }]}
                placeholderTextColor="#bebebe"
                placeholder="Seu nome"
                value={nome}
                onChangeText={validateName}
              />
              {nome.length > 0 && (
                <MaterialCommunityIcons
                  name={nameValid ? "check-circle" : "close-circle"}
                  size={20}
                  color={nameValid ? "#32CD32" : "red"}
                />
              )}
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 300 }}
            >
              <TextInput
                style={[stylesSign.input, { flex: 1 }]}
                placeholderTextColor="#aaa"
                placeholder="Seu Email"
                value={email}
                onChangeText={validateEmail}
                autoCapitalize="none"
              />
              {email.length > 0 && (
                <MaterialCommunityIcons
                  name={emailValid ? "check-circle" : "close-circle"}
                  size={20}
                  color={emailValid ? "#32CD32" : "red"}
                />
              )}
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", width: 300 }}
            >
              <TextInput
                style={[stylesSign.input, { flex: 1 }]}
                placeholderTextColor="#bebebe"
                placeholder="Seu senha"
                secureTextEntry={!showPassword}
                value={senha}
                onChangeText={validatePassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <MaterialCommunityIcons
                  nome={showPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <Text style={{ color: "red", marginTop: 5 }}>
                {passwordError}
              </Text>
            ) : senha.length > 0 ? (
              <Text style={{ color: "#32CD32", marginTop: 5 }}>
                Senha forte
              </Text>
            ) : null}
          </View>

          <TouchableOpacity
            style={[
              StylesOnboarding.btn,
              {
                marginTop: 40,
                width: "100%",
                backgroundColor:
                  !nameValid || !emailValid || passwordError.length > 0
                    ? "#861d1d"
                    : "green",
              },
            ]}
            onPress={handleRegister}
            disabled={!nameValid || !emailValid || passwordError.length > 0}
          >
            <Text style={[StylesOnboarding.txt2, { fontFamily: "Poppins" }]}>
              Cadastrar
            </Text>
          </TouchableOpacity>

          <View style={[StylesOnboarding.viewSignUp, { marginTop: 20 }]}>
            <Text style={{ fontFamily: "Lato", fontSize: 16, color: "#fff" }}>
              Já tem cadastro?
            </Text>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={{ color: "#bebebe", fontFamily: "PoppinsBold" }}>
                {" "}
                Entrar
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <StatusBar hidden />
    </ImageBackground>
  );
}
