import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, View } from "react-native";

const FeatureBtns = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Feather name="heart" size={28} color="black" />
        <Ionicons name="chatbubble-outline" size={28} color="black" />
        <Feather name="send" size={28} color="black" />
      </View>
      <View>
        <Feather name="bookmark" size={28} color="black" />
      </View>
    </View>
  );
};

export default FeatureBtns;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  left: {
    flexDirection: "row",
    gap: 15,
  },
});

