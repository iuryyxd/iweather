import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Sizes } from "../utils/constants";

import Logo from "../../assets/Logo.svg";
import { SearchInput } from "../components/SearchInput";

export function Search() {
  return (
    <ImageBackground
      source={require("../../assets/Background.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <Logo width={160} height={71} style={styles.logo} />

        <Text style={styles.title}>
          Boas vindas ao <Text style={styles.titleBold}>TypeWeather</Text>
        </Text>
        <Text style={styles.description}>
          Escolha um local para ver a previsão do tempo
        </Text>
        <SearchInput />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 32,
  },

  logo: {
    marginBottom: 192,
  },

  title: {
    fontFamily: Sizes.heading.md.font,
    fontSize: Sizes.heading.md.size,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 4,
  },

  titleBold: {
    color: Colors.blueLight,
  },

  description: {
    fontFamily: Sizes.text.sm.font,
    fontSize: Sizes.text.sm.size,
    color: Colors.gray[200],
    marginBottom: 32,
  },
});
