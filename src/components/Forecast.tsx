import { View, StyleSheet } from "react-native";
import { Colors } from "../utils/constants";
import ForecastItem from "./ForecastItem";

export function Forecast() {
  return (
    <View style={styles.container}>
      <ForecastItem
        day="Ter"
        max={32}
        min={26}
        require={require("../../assets/icon-storm-day.png")}
      />

      <ForecastItem
        day="Qua"
        max={32}
        min={26}
        require={require("../../assets/icon-rain-day.png")}
      />

      <ForecastItem
        day="Qui"
        max={32}
        min={26}
        require={require("../../assets/icon-fewclouds-day.png")}
      />

      <ForecastItem
        day="Sex"
        max={32}
        min={26}
        require={require("../../assets/icon-cloudy-day.png")}
      />

      <ForecastItem
        day="Sab"
        max={32}
        min={26}
        require={require("../../assets/icon-clear-day.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.gray[700],
  },
});
