import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ComplaintScreen = ({ route }) => {
  const appID = route.prams.appID;
  return (
    <View>
      <Text>ComplaintScreen</Text>
    </View>
  );
};

export default ComplaintScreen;

const styles = StyleSheet.create({});
