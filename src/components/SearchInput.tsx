import { useState } from "react";
import { View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Colors, Sizes } from "../utils/constants";
import { Popover } from "./Popover";

export function SearchInput() {
  const [search, setSearch] = useState<string>("");
  const [place, setPlace] = useState<Array<string>>([]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar local"
          placeholderTextColor={Colors.gray[400]}
          style={[
            styles.input,
            {
              color: place.length > 0 ? "#FAFAFA" : Colors.white,
              opacity: place.length > 0 ? 0.6 : 1,
            },
          ]}
          editable={place.length > 0 ? false : true}
          onChangeText={(text) => setSearch(text)}
        />
        {place.length > 0 && (
          <ActivityIndicator
            color={Colors.blueLight}
            size={32}
            style={styles.loading}
          />
        )}
      </View>

      {search.length > 0 && <Popover />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  inputContainer: {
    flexDirection: "row",
    position: "relative",
  },

  loading: {
    marginTop: 12,
    right: 20,
    position: "absolute",
  },

  input: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    backgroundColor: Colors.gray[600],
    fontSize: Sizes.text.md.size,
    fontFamily: Sizes.text.md.font,
    paddingVertical: 17,
    paddingHorizontal: 20,
  },
});
