import { View, Text, StyleSheet } from "react-native";
import { Colors, Sizes } from "../utils/constants";
import { randomUUID } from "expo-crypto";

const cards = [
  "Porto Alegre, RS - Brasil",
  "Porto Seguro, BA - Brasil",
  "Porto - Portugal",
];

export function Popover() {
  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Text
          style={[
            styles.card,
            { borderBottomWidth: index + 1 < cards.length ? 1 : 0 },
          ]}
          key={randomUUID()}
        >
          {card}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.gray[500],
    borderRadius: 8,
    marginTop: 8
  },

  card: {
    paddingVertical: 16,
    paddingLeft: 20,
    color: Colors.white,
    fontFamily: Sizes.text.md.font,
    fontSize: Sizes.text.md.size,
    borderStyle: "solid",
    borderBottomColor: Colors.gray[600],
  },
});
