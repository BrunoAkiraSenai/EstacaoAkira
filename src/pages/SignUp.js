import React, { useState } from "react";
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
import { StatusBar } from "expo-status-bar";
import { stylesSign } from "../styles/StylesSign";
import { StylesOnboarding } from "../styles/StylesOnboarding";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SignUp() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validateName = (text) => {
    setName(text);
    setNameValid(text.length >= 3);
  };

  const validateEmail = (text) => {
    setEmail(text);
    const regex = /\S+@\S+\.\S+/;
    setEmailValid(regex.test(text));
  };

  const validatePassword = (text) => {
    setPassword(text);

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

  const handleSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    if (!nameValid || !emailValid || passwordError.length > 0) {
      Alert.alert("Erro", "Campos inválidos!");
      return;
    }

    Alert.alert("Sucesso", "Cadastro realizado!");
    console.log({ name, email, password });
    navigation.navigate("SignIn");
  };

  return (
    <ImageBackground
      style={stylesSign.container}
      source={require("../images/agro.jpg")}
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

          <Text style={stylesSign.title}>Cadastrar</Text>
          <Text style={stylesSign.text}>Faça seu cadastro</Text>

          <View style={{ marginTop: 40 }}>
            <Text style={{ color: "#fff" }}>Nome *</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={[stylesSign.input, { flex: 1 }]}
                placeholderTextColor="#bebebe"
                placeholder="Seu nome"
                value={name}
                onChangeText={validateName}
              />
              {name.length > 0 && (
                <MaterialCommunityIcons
                  name={nameValid ? "check-circle" : "close-circle"}
                  size={20}
                  color={nameValid ? "green" : "red"}
                />
              )}
            </View>
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

            <Text style={{ color: "#fff", marginTop: 15 }}>Senha *</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={[stylesSign.input, { flex: 1 }]}
                placeholderTextColor="#bebebe"
                placeholder="Seu senha"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={validatePassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <MaterialCommunityIcons
                  name={showPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <Text style={{ color: "red", marginTop: 5 }}>
                {passwordError}
              </Text>
            ) : password.length > 0 ? (
              <Text style={{ color: "green", marginTop: 5 }}>Senha forte</Text>
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
                    ? "grey"
                    : "green",
              },
            ]}
            onPress={handleSignUp}
            disabled={!nameValid || !emailValid || passwordError.length > 0}
          >
            <Text style={StylesOnboarding.txt2}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={[StylesOnboarding.viewSignUp, { marginTop: 20 }]}>
            <Text style={StylesOnboarding.txt2}>Já tem cadastro?</Text>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={{ fontWeight: "bold", color: "#fff" }}>
                {" "}
                Sign In
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <StatusBar hidden />
    </ImageBackground>
  );
}
