import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { StylesOnboarding } from "../styles/StylesOnboarding"; // ajuste o caminho
import { stylesSign } from "../styles/StylesSign";

// Import Component TextInput
import InputComp from "../components/InputComp";

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SignIn({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/trator.jpg")}
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
          <InputComp textPlaceholder={"Email Address"} password={false} />
          <InputComp textPlaceholder={"Password"} password={true} />

          <Pressable style={{ position: "absolute", right: 0, bottom: -20 }}>
            <Text style={{ color: "grey" }}>Forgot password?</Text>
          </Pressable>
        </View>

        {/* Botão de entrar */}
        <TouchableOpacity
          style={[StylesOnboarding.btn, { marginTop: 80, width: "100%" }]}
          onPress={() => navigation.navigate("SignUp")} // corrija o nome da rota
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
