import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Comments from "./Comments";
import FeatureBtns from "./FeatureBtns";
import PostsHeader from "./PostsHeader";

const ContentIndex = () => {
  return (
    <View>
      <PostsHeader />
      <View
        style={{
          width: "100%",
          aspectRatio: 9 / 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={require("@/assets/images/ootd1.jpg")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <FeatureBtns />
      <Comments />
    </View>
  );
};

export default ContentIndex;

const styles = StyleSheet.create({});
