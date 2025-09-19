import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

export default function ClimaScreen() {
  const cidades = [
    { nome: "AMERICANA", temp: 26, min: 18, max: 29 },
    { nome: "SUMARÉ", temp: 26, min: 19, max: 30 },
    { nome: "SANTA BÁRBARA", temp: 26, min: 17, max: 28 },
  ];

  return (
    <ImageBackground
      source={require("../assets/images/agro.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="arrow-back" size={24} color="white" />

          <Text style={styles.title}>ESTAÇÃO AKIRA</Text>

          <TouchableOpacity onPress={() => console.log("Menu clicado!")}>
            <Ionicons name="menu" size={28} color="white" />
          </TouchableOpacity>
        </View>

        {/* Campo de busca */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="white" />
          <TextInput
            placeholder="Buscar cidade"
            placeholderTextColor="#ccc"
            style={styles.input}
          />
        </View>

        {/* Clima Atual */}
        <View style={styles.weatherBox}>
          <Text style={styles.title}>NOVA ODESSA</Text>
          <Text style={styles.title}>30°</Text>
          <MaterialCommunityIcons
            name="weather-partly-cloudy"
            size={150}
            color="white"
            style={styles.weatherIcon}
          />
        </View>

        {/* Subtítulo */}
        <Text style={styles.subtitle}>cidades próximas:</Text>

        {/* Lista centralizada */}
        <ScrollView
          contentContainerStyle={styles.cityList}
          showsVerticalScrollIndicator={false}
        >
          {cidades.map((cidade, index) => (
            <TouchableOpacity key={index} style={styles.cityCard}>
              <Text style={styles.temp}>{cidade.temp}°</Text>
              <Text style={styles.cityName}>{cidade.nome}</Text>
              <Text style={styles.minMax}>
                min: {cidade.min}° | max: {cidade.max}°
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  weatherBox: {
    alignItems: "center", // centraliza horizontal
    marginTop: 20, // dá espaço do topo
  },

  weatherIcon: {
    marginTop: 10, // espaço entre texto e ícone
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40, // 👈 empurra mais pra baixo
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    color: "white",
  },
  subtitle: {
    color: "#ddd",
    fontSize: 14,
    marginTop: 40, // antes era 250
    textAlign: "center",
  },
  cityList: {
    flexGrow: 1,
    justifyContent: "center", // 👈 centraliza vertical
    alignItems: "center", // 👈 centraliza horizontal
    gap: 15,
  },
  cityCard: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 12,
    padding: 15,
    marginBottom: 30,
    marginTop: 0,
  },
  temp: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  cityName: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  minMax: {
    fontSize: 12,
    color: "#ff4d4d",
  },
});
