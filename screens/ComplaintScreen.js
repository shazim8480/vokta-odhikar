import { ScrollView } from "react-native";
import React from "react";
import ComplaintInfo from "../components/complaint/ComplaintInfo";

// const SCREEN_WIDTH = Dimensions.get("window").width;

const ComplaintScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <ComplaintInfo navigation={navigation} />
    </ScrollView>
  );
};

export default ComplaintScreen;
