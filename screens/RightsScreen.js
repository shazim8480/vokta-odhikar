import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RightsScreen = ({ route }) => {
  const appID = route.prams.id;
  return (
    <View>
      <Text>RightsScreen</Text>
    </View>
  );
};

export default RightsScreen;

const styles = StyleSheet.create({});
