import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../utils/constants";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { Forecast } from "../components/Forecast";

export function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Card />
      <Details />
      <Forecast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 8,
    backgroundColor: Colors.gray[900],
  },
});
