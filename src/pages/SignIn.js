import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

// Import Styles!
import { stylesSign } from "../styles/StylesSign";

import { StylesOnboarding } from "../styles/StylesOnboarding";

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Import Component TextInput
import InputComp from "../components/InputComp";

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={stylesSign.container}
      source={require("../images/agro.jpg")}
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
        <MaterialCommunityIcons name="barley" size={50} color="white" />

        <Text style={stylesSign.title}>Entrar</Text>
        <Text style={stylesSign.text}>
          Entre aqui para garantir acesso ao aplicativo.
        </Text>

        <View style={{ marginTop: 80 }}>
          <InputComp textPlaceholder={"E-mail"} password={false} />
          <InputComp textPlaceholder={"Senha"} password={true} />
        </View>

        <TouchableOpacity
          style={[StylesOnboarding.btn, { marginTop: 80, width: "100%" }]}
        >
          <Text style={StylesOnboarding.txt2}>Entrar</Text>
        </TouchableOpacity>

        <View style={StylesOnboarding.viewSignUp}>
          <Text style={StylesOnboarding.txt2}>Não possui conta? </Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Cadastro</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar hidden />
    </ImageBackground>
  );
}
