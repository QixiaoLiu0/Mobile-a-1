import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AvatarDesc = () => (
  <View style={styles.container}>
    <Text style={[styles.text, styles.bold]}>ootd_everyday</Text>
    <Text style={styles.text}>Via frenchie_fry39</Text>
  </View>
);

export default AvatarDesc;

const styles = StyleSheet.create({
  container: {},
  text: {},
  bold: { fontWeight: "bold" },
});
