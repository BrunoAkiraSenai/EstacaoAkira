import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DashPrincipal() {
  const [novaCidade, setNovaCidade] = useState("");
  const [cidade, setCidade] = useState("Nova Odessa");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "f6387da64811ca4d06c3545b3ecf41ce";

  const [menuOpen, setMenuOpen] = useState(false);

  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

  const hourlyForecast = [
    { hora: "10:00", temp: 25 },
    { hora: "12:00", temp: 25 },
    { hora: "16:00", temp: 25 },
    { hora: "22:00", temp: 25 },
  ];

  const buscarClima = async (nomeCidade) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${nomeCidade}&appid=${API_KEY}&units=metric&lang=pt_br`;
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Erro ao buscar clima:", error);
    }
  };

  useEffect(() => {
    buscarClima(cidade);
  }, [cidade]);

  return (
    <ImageBackground
      source={require("../assets/images/dashboard.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
            <Ionicons name="menu" size={28} color="white" />
          </TouchableOpacity>

          <Text style={styles.city}>{weatherData?.city?.name || cidade}</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome da cidade"
            placeholderTextColor="#ccc"
            value={novaCidade}
            onChangeText={setNovaCidade}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              if (novaCidade.trim() !== "") {
                setCidade(novaCidade);
                setNovaCidade("");
              }
            }}
          >
            <Ionicons name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {menuOpen && (
          <View style={styles.menu}>
            <TouchableOpacity>
              <Text style={styles.menuItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCalendarMenuOpen(!calendarMenuOpen)}
            >
              <Text style={styles.menuItem}>Calendário</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuItem}>Saida</Text>
            </TouchableOpacity>
          </View>
        )}

        {calendarMenuOpen && (
          <View style={styles.subMenu}>
            <TouchableOpacity>
              <Text style={styles.subMenuItem}>Algodão</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subMenuItem}>Alho</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subMenuItem}>Amendoim</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subMenuItem}>Batata</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subMenuItem}>Café</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subMenuItem}>Cana</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subMenuItem}>Tomate</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subMenuItem}>Feijão</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subMenuItem}>Milho</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subMenuItem}>Mandioca</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.mainWeather}>
          <Image
            source={require("../assets/images/nuvem.jpg")}
            style={styles.cloudIcon}
          />
          <Text style={styles.temperature}>
            {weatherData
              ? Math.round(weatherData.list[0].main.temp) + "°"
              : "--"}
          </Text>
          <Text style={styles.condition}>
            {weatherData
              ? weatherData.list[0].weather[0].description.toUpperCase()
              : "--"}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <Ionicons name="swap-vertical" size={30} color="white" />
            <Text style={styles.infoText}>VENTO</Text>
            <Text style={styles.infoText}>
              {weatherData
                ? (weatherData.list[0].wind.speed * 3.6).toFixed(1) + " km/h"
                : "--"}
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="water" size={30} color="white" />
            <Text style={styles.infoText}>UMIDADE</Text>
            <Text style={styles.infoText}>
              {weatherData ? weatherData.list[0].main.humidity + "%" : "--"}
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="cloud-outline" size={30} color="white" />
            <Text style={styles.infoText}>NUVENS</Text>

            <Text style={styles.infoText}>
              {weatherData ? weatherData.list[0].clouds.all + "%" : "--"}
            </Text>
          </View>
        </View>

        <Text style={styles.subtitle}>HOJE</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.forecastList}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.forecastList}
          >
            {weatherData &&
              weatherData.list.slice(0, 6).map((item, index) => (
                <View key={index} style={styles.forecastCard}>
                  <Ionicons name="cloud" size={24} color="white" />
                  <Text style={styles.forecastTemp}>
                    {Math.round(item.main.temp)}°
                  </Text>
                  <Text style={styles.forecastHour}>
                    {item.dt_txt.split(" ")[1].slice(0, 5)}
                  </Text>
                </View>
              ))}
          </ScrollView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "white",
  },

  searchButton: {
    marginLeft: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
    gap: 15,
  },
  city: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  menu: {
    backgroundColor: "#343a40",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  menuItem: {
    color: "white",
    fontSize: 16,
    paddingVertical: 6,
  },

  subMenu: {
    backgroundColor: "#495057",
    borderRadius: 8,
    padding: 8,
    marginBottom: 15,
    marginLeft: 20,
  },
  subMenuItem: {
    color: "#ffc107",
    fontSize: 15,
    paddingVertical: 5,
  },
  mainWeather: {
    alignItems: "center",
    marginVertical: 30,
  },
  cloudIcon: {
    width: 120,
    height: 80,
    marginBottom: 10,
    resizeMode: "contain",
  },
  temperature: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
  },
  condition: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  infoCard: {
    alignItems: "center",
  },
  infoText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },

  subtitle: {
    color: "#ddd",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  forecastList: {
    gap: 12,
  },
  forecastCard: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 12,
    padding: 10,
    height: 100,
    alignItems: "center",
    width: 70,
  },
  forecastTemp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  forecastHour: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 4,
  },
});
