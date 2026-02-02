import React from "react";
import { StyleSheet, View } from "react-native";

const FeatureBtns = () => {
  return <View style={styles.container}>FeatureBtns</View>;
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
