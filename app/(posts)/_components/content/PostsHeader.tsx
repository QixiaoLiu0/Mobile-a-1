import Avatar from "@/app/components/Avatar";
import AvatarDesc from "@/app/components/AvatarDesc";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, View } from "react-native";

const PostsHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Avatar uri="https://i.pravatar.cc/150?img=2" width={35} />
        <View style={{ marginLeft: 10 }}>
          <AvatarDesc />
        </View>
      </View>
      <AntDesign style={styles.icon} name="ellipsis" size={22} color="black" />
    </View>
  );
};

export default PostsHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  main: {
    flexDirection: "row",
  },
  icon: {
    position: "relative",
    top: 8,
  },
});
