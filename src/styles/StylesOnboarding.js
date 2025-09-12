// styles/StylesOnboarding.js
import { StyleSheet } from "react-native";

export const StylesOnboarding = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
  },

  viewSignUp: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 7,
  },

  btn: {
    backgroundColor: "grey",
    width: "80%",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  txt2: {
    color: "#fff",
  },

  txt: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
});
