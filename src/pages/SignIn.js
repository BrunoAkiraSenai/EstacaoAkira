import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { StylesOnboarding } from "../styles/StylesOnboarding"; // ajuste o caminho

// Import Component TextInput
import InputComp from "../components/InputComp";

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SignIn({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/japones.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <MaterialCommunityIcons
          name="barley"
          size={50}
          color="white"
          style={{ marginBottom: 20 }}
        />
        <Text style={styles.title}>Estação Akira</Text>
        <Text style={styles.subtitle}>O Site Perfeito para o Clima</Text>

        {/* Formulário */}
        <View style={{ width: "80%", marginTop: 40 }}>
          <InputComp textPlaceholder={"Email Address"} password={false} />
          <InputComp textPlaceholder={"Password"} password={true} />

          <Pressable style={{ alignSelf: "flex-end", marginTop: 10 }}>
            <Text style={{ color: "grey" }}>Forgot password?</Text>
          </Pressable>
        </View>

        {/* Botão de entrar */}
        <TouchableOpacity
          style={[StylesOnboarding.btn, { marginTop: 40 }]}
          onPress={() => navigation.navigate("SignUp")} // corrija o nome da rota
        >
          <Text style={StylesOnboarding.btnText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
  },
});
