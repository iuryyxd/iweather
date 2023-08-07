import { View, Text, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { Colors, Sizes } from "../utils/constants";

interface ForecastItemProps {
  day: string;
  max: number;
  min: number;
  require: ImageSourcePropType;
}

export default function ForecastItem({
  day,
  max,
  min,
  require,
}: ForecastItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day}</Text>
      <Image source={require} style={styles.icon} />
      <Text style={styles.max}>{max}°c</Text>
      <Text style={styles.min}>{min}°c</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    alignItems: "center",
  },

  day: {
    color: Colors.gray[200],
    fontFamily: Sizes.heading.xs.font,
    fontSize: Sizes.heading.xs.size,
  },

  icon: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },

  max: {
    color: Colors.gray[100],
    fontFamily: Sizes.heading.xs.font,
    fontSize: Sizes.heading.xs.size,
  },

  min: {
    color: Colors.gray[400],
    fontFamily: Sizes.heading.xs.font,
    fontSize: Sizes.heading.xs.size,
  },
});
