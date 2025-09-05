import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
  StyleSheet
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Import Styles!
import { stylesSign } from "../styles/StylesSign";

import { StylesOnboarding } from "../styles/StylesOnboarding";

import { useNavigation } from "@react-navigation/native";

import { StylesOnboarding } from "../styles/StylesOnboarding";

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import InputComp from "../components/InputComp";

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
          name="barley"
          size={50}
          color="white"
          style={{ marginBottom: 20 }}
        />
        <Text style={stylesSign.title}>CADASTRO</Text>
        <Text style={stylesSign.text}>
          Cadastre-se na estação Akira para melhores informações!
        </Text>

        <View style={{ marginTop: 80 }}>
          <TextInput
            style={styles.input}
            placeholder='Nome'
          // value={nome}
          // onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder='Email'
          // value={email}
          // onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder='Senha'
            // value={senha}
            // onChangeText={setSenha}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={[StylesOnboarding.btn, { marginTop: 80, width: "100%" }]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={StylesOnboarding.txt2}>Sign Up</Text>
        </TouchableOpacity>

        <View style={StylesOnboarding.viewSignUp}>
          <Text style={StylesOnboarding.txt2}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Sign In</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar hidden />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 25,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#fff"
  },

})
