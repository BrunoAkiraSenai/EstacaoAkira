// src/pages/DashboardCalendario.js
import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import axios from "axios";
import {
  VictoryChart,
  VictoryAxis,
  VictoryBar,
  VictoryLegend,
  VictoryGroup,
  VictoryTheme,
} from "victory-native"; // no web use 'victory'

export default function DashboardCalendario() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        // Exemplo: SIDRA IBGE – Produção agrícola por cultura
        const response = await axios.get(
          "https://servicodados.ibge.gov.br/api/v2/agricultura/culturas?formato=json"
        );

        // Transformando os dados para gráfico
        const dadosFormatados = response.data.map((item) => ({
          cultura: item.cultura,
          plantio: Math.floor(Math.random() * 6) + 1, // meses simulados
          colheita: Math.floor(Math.random() * 6) + 7, // meses simulados
        }));

        setDados(dadosFormatados);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        // fallback mock
        setDados([
          { cultura: "Soja", plantio: 2, colheita: 6 },
          { cultura: "Milho", plantio: 3, colheita: 7 },
          { cultura: "Cana", plantio: 1, colheita: 12 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, []);

  if (loading) return <Text>Carregando dados...</Text>;

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        📅 Dashboard Calendário Agrícola
      </Text>
      <VictoryChart domainPadding={{ x: 50 }} theme={VictoryTheme.material}>
        <VictoryAxis tickValues={dados.map((d) => d.cultura)} label="Cultura" />
        <VictoryAxis dependentAxis tickValues={[1, 3, 6, 9, 12]} label="Mês" />
        <VictoryLegend
          x={100}
          y={10}
          orientation="horizontal"
          gutter={20}
          data={[
            { name: "Plantio", symbol: { fill: "#4CAF50" } },
            { name: "Colheita", symbol: { fill: "#2196F3" } },
          ]}
        />
        <VictoryGroup offset={20} colorScale={["#4CAF50", "#2196F3"]}>
          <VictoryBar data={dados} x="cultura" y="plantio" />
          <VictoryBar data={dados} x="cultura" y="colheita" />
        </VictoryGroup>
      </VictoryChart>
    </ScrollView>
  );
}
