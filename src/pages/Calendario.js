import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  // 🔹 Dados fixos de exemplo
  const clima = {
    cidade: "NOVA ODESSA",
    temperatura: 30,
    vento: "15 km/h",
    max: 32,
    min: 22,
  };

  const calendario = [
    { date: "01/10/2025", task: "Plantio de milho" },
    { date: "05/10/2025", task: "Irrigação das lavouras" },
    { date: "12/10/2025", task: "Aplicação de adubo" },
    { date: "20/10/2025", task: "Colheita antecipada de feijão" },
  ];

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
      }}
      style={styles.fundo}
      blurRadius={2}
    >
      <View style={styles.sombra} />
      <View style={styles.container}>
        <StatusBar style="light" />

        {/* Clima */}
        <Text style={styles.cidade}>{clima.cidade}</Text>
        <Text style={styles.temperatura}>{clima.temperatura}°C</Text>
        <Text style={styles.condicao}>Clima Atual</Text>

        <View style={styles.detalhes}>
          <Text style={styles.detalhe}>🌬️ Vento: {clima.vento}</Text>
          <Text style={styles.detalhe}>🌡️ Máx: {clima.max}°C</Text>
          <Text style={styles.detalhe}>❄️ Mín: {clima.min}°C</Text>
        </View>

        {/* Calendário Agrícola */}
        <Text style={styles.tituloSessao}>📅 Calendário Agrícola</Text>
        <FlatList
          data={calendario}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemCalendario}>
              <Text style={styles.dataCalendario}>{item.date}</Text>
              <Text style={styles.tarefaCalendario}>{item.task}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  sombra: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60,
  },
  cidade: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  temperatura: {
    fontSize: 70,
    fontWeight: "200",
    color: "#fff",
  },
  condicao: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  detalhes: {
    marginBottom: 30,
  },
  detalhe: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 4,
  },
  tituloSessao: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  itemCalendario: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  dataCalendario: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  tarefaCalendario: {
    fontSize: 14,
    color: "#fff",
  },
});
