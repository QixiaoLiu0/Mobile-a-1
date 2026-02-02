import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Comments from "./Comments";
import FeatureBtns from "./FeatureBtns";
import PostsHeader from "./PostsHeader";

const ContentIndex = () => {
  return (
    <View>
      <PostsHeader />
      <View>
        <Image />
      </View>
      <FeatureBtns />
      <Comments />
    </View>
  );
};

export default ContentIndex;

const styles = StyleSheet.create({});
