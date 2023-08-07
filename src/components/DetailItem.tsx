import { View, Text, StyleSheet } from "react-native";
import { Colors, Sizes } from "../utils/constants";

interface DetailItemProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  border?: boolean;
}

export default function DetailItem({
  title,
  value,
  icon,
  border = false,
}: DetailItemProps) {
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomWidth: border ? 1 : 0,
          borderBottomColor: Colors.gray[600],
          borderStyle: "solid",
        },
      ]}
    >
      <View style={styles.left}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  iconContainer: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: Colors.gray[200],
    fontFamily: Sizes.heading.xs.font,
    fontSize: Sizes.heading.xs.size,
  },

  value: {
    color: Colors.gray[100],
    fontFamily: Sizes.heading.sm.font,
    fontSize: Sizes.heading.sm.size,
  },
});
