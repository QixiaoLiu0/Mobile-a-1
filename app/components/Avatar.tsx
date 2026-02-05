import React from "react";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface AvatarProps {
  uri: string;
  width: number;
  style?: StyleProp<ViewStyle>;
}

const Avatar = ({ uri, width, style }: AvatarProps) => {
  return (
    <View style={[styles.avatarContainer, style]}>
      <Image
        source={{ uri: uri }}
        style={[
          styles.avatarImage,
          { width: width, height: width, borderRadius: width / 2 },
        ]}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatarContainer: {
    overflow: "hidden",
  },
  avatarImage: {
    resizeMode: "cover",
    overflow: "hidden",
  },
});
