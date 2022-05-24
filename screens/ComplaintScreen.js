import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import ComplaintInfo from "../components/complaint/ComplaintInfo";
import ComplainerInfo from "../components/complaint/ComplainerInfo";
import MainButton from "../components/shared/MainButton";

const SCREEN_WIDTH = Dimensions.get("window").width;

const ComplaintScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ComplaintInfo />
      <ComplainerInfo />
      <MainButton style={styles.button} title="অভিযোগ করুন" />
    </SafeAreaView>
  );
};

export default ComplaintScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    flex: 1,
    width: "100%",
  },
});
