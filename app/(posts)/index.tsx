import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabBar from "../components/TabBar";
import ContentIndex from "./_components/content";
import NavBar from "./_components/NavBar";

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={["top"]}>
      <View>
        <NavBar />
        <ContentIndex />
        <TabBar />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
