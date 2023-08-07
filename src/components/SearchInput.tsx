import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors, Sizes } from "../utils/constants";
import { Popover } from "./Popover";

export function SearchInput() {
  const [search, setSearch] = React.useState<string>("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar local"
        placeholderTextColor={Colors.gray[400]}
        style={styles.input}
        onChangeText={(text) => setSearch(text)}
      />
      {search.length > 0 && <Popover />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  input: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    backgroundColor: Colors.gray[600],
    color: Colors.white,
    fontSize: Sizes.text.md.size,
    fontFamily: Sizes.text.md.font,
    paddingVertical: 17,
    paddingHorizontal: 20,
  },
});
