import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { styles, stylesBtn } from "../styles/styles";

export default function SignIn() {
  return (
    <ImageBackground
      source={require("../assets/images/chuva.jpg")} // ajuste o caminho
      style={stylesBtn.container}
    >
      <View style={styles.content}>
        <Text style={StylesOnboarding.text}>Tela de Login (SignIn)</Text>

        <TouchableOpacity
          style={StylesOnboarding.container}
          onPress={() => navigation.navigate("SingUp")}
        >
          <Text style={StylesOnboarding.btn}> TESTE</Text>
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
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
});
