import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { StyleSheet, View } from "react-native";

const TabBar = () => (
  <View style={styles.container}>
    <Feather name="home" size={28} color="black" />
    <Feather name="search" size={28} color="black" />
    <AntDesign name="play-circle" size={28} color="black" />
    <Ionicons name="briefcase-outline" size={28} color="black" />
    <MaterialCommunityIcons name="face-man-profile" size={28} color="black" />
  </View>
);

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 20,
  },
});

