import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const weatherData = {
  city: "Sydney",
  date: "Tuesday, 1 Jan 2019",
  temperature: 33,
  condition: "Sunny",
  wind: "16 km/h",
  precipitation: "60%",
  humidity: "41%",
  forecast: [
    { day: "Mon", temp: "32°" },
    { day: "Tue", temp: "33°" },
    { day: "Wed", temp: "29°" },
    { day: "Thu", temp: "31°" },
    { day: "Fri", temp: "36°" },
    { day: "Sat", temp: "33°" },
    { day: "Sun", temp: "32°" },
  ],
};

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
      }}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <StatusBar style="light" />

        <Text style={styles.city}>{weatherData.city.toUpperCase()}</Text>
        <Text style={styles.date}>{weatherData.date}</Text>

        <Text style={styles.temperature}>{weatherData.temperature}°</Text>
        <Text style={styles.condition}>{weatherData.condition}</Text>

        <View style={styles.details}>
          <Text style={styles.detail}>Wind: {weatherData.wind}</Text>
          <Text style={styles.detail}>
            Precipitation: {weatherData.precipitation}
          </Text>
          <Text style={styles.detail}>Humidity: {weatherData.humidity}</Text>
        </View>

        <FlatList
          horizontal
          data={weatherData.forecast}
          keyExtractor={(item) => item.day}
          renderItem={({ item }) => (
            <View style={styles.forecastItem}>
              <Text style={styles.forecastDay}>{item.day}</Text>
              <Text style={styles.forecastTemp}>{item.temp}</Text>
            </View>
          )}
          style={styles.forecastList}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  city: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  date: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  temperature: {
    fontSize: 80,
    fontWeight: "200",
    color: "#fff",
  },
  condition: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 30,
  },
  details: {
    alignItems: "center",
    marginBottom: 40,
  },
  detail: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 2,
  },
  forecastList: {
    marginTop: 10,
  },
  forecastItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  forecastDay: {
    fontSize: 16,
    color: "#fff",
  },
  forecastTemp: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
