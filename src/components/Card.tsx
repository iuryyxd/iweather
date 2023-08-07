import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { Colors, Sizes } from "../utils/constants";

export function Card() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg-fewclouds-night.png")}
        style={styles.imageContainer}
        imageStyle={{ borderRadius: 8 }}
      >
        <View style={styles.cardContainer}>
          <View style={styles.topTextContainer}>
            <Text style={styles.placeText}>Porto Alegre, RS</Text>
            <Text style={styles.dateText}>
              Segunda feira, 15 de maio de 2023
            </Text>
          </View>

          <View style={styles.bottom}>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.tempText}>28°c</Text>
              <View style={styles.infoText}>
                <Text style={styles.infoTemps}>26°c / 32°c</Text>
                <Text style={styles.infoDesc}>Poucas nuvens</Text>
              </View>
            </View>

            <Image
              source={require("../../assets/icon-fewclouds-night.png")}
              style={styles.bottomIcon}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 328,
    borderRadius: 12,
    padding: 12,
    backgroundColor: Colors.gray[700],
  },

  imageContainer: {
    height: "100%",
  },

  cardContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    height: "100%",
    justifyContent: "space-between",
  },

  topTextContainer: {
    gap: 4,
  },

  placeText: {
    color: Colors.gray[100],
    fontSize: Sizes.heading.sm.size,
    fontFamily: Sizes.heading.sm.font,
  },

  dateText: {
    color: Colors.gray[100],
    fontSize: Sizes.text.xs.size,
    fontFamily: Sizes.text.xs.font,
  },

  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  bottomTextContainer: {
    gap: 8,
  },

  tempText: {
    color: Colors.white,
    fontFamily: Sizes.heading.xl.font,
    fontSize: Sizes.heading.xl.size,
  },

  infoText: {
    gap: 4,
  },

  infoTemps: {
    color: Colors.white,
    fontFamily: Sizes.heading.sm.font,
    fontSize: Sizes.heading.sm.size,
  },

  infoDesc: {
    color: Colors.white,
    fontFamily: Sizes.text.sm.font,
    fontSize: Sizes.text.sm.size,
  },

  bottomIcon: {
    width: 180,
    height: 180,
  },
});
