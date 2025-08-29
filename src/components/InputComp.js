import { TextInput } from "react-native";

import { stylesSign } from "../styles/stylesSign";

export default function InputComp({ textPlaceholder, password }) {
  return (
    <TextInput
      style={stylesSign.input}
      placeholder={textPlaceholder}
      placeholderTextColor={"#bebebe"}
      secureTextEntry={password}
    />
  );
}
