import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import ComplaintInfo from "../components/complaint/ComplaintInfo";
import MainButton from "../components/shared/MainButton";

// const SCREEN_WIDTH = Dimensions.get("window").width;

const ComplaintScreen = () => {
  return (
    <ScrollView>
      <ComplaintInfo />
    </ScrollView>
  );
};

export default ComplaintScreen;
