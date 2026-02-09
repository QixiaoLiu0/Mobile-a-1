import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TabBar = () => {
  const handlePress = () => Alert.alert("Alert Button pressed");
  return (
    <View style={styles.container}>
      {/* <Feather name="home" size={28} color="black"></Feather> */}
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Alert</Text>
      </TouchableOpacity>
      <Feather name="search" size={28} color="black" />
      <AntDesign name="play-circle" size={28} color="black" />
      <Ionicons name="briefcase-outline" size={28} color="black" />
      <MaterialCommunityIcons name="face-man-profile" size={28} color="black" />
    </View>
  );
};

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
  buttonText: { color: "#fff", fontSize: 15, fontWeight: "600" },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 5,
    paddingHorizontal: 2,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
