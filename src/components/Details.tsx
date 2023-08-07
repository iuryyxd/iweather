import { View, StyleSheet } from "react-native";
import { Colors } from "../utils/constants";
import DetailItem from "./DetailItem";

import Thermometer from "../../assets/thermometer-simple-light.svg";
import CloudRain from "../../assets/cloud-rain-light.svg";
import WindLight from "../../assets/wind-light.svg";
import DropLight from "../../assets/drop-light.svg";
import SumDinLight from "../../assets/sun-dim-light.svg";

export function Details() {
  return (
    <View style={styles.container}>
      <DetailItem
        icon={<Thermometer />}
        title="Sensação térmica"
        value="26ºc"
        border
      />
      <DetailItem
        icon={<CloudRain />}
        title="Probabilidade de chuva"
        value="0%"
        border
      />
      <DetailItem
        icon={<WindLight />}
        title="Velocidade do vento"
        value="8 km/h"
        border
      />
      <DetailItem
        icon={<DropLight />}
        title="Umidade do ar"
        value="40%"
        border
      />
      <DetailItem icon={<SumDinLight />} title="Índice UV" value="5" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: Colors.gray[700],
  },
});
