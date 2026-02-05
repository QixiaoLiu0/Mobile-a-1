import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text
          style={{
            color: "#9e9e9e",
            fontSize: 12,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          OOTD_EVERYDAY
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Posts
        </Text>
      </View>
      <View style={styles.chevron}>
        <Feather name="chevron-left" size={24} color="black" />
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingVertical: 5,
  },
  chevron: {
    position: "absolute",
    left: 0,
  },
  text: {
    textAlign: "center",
  },
});
