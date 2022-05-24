import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DetailsScreen = ({ route }) => {
  const appID = route.params.appID; // comes from DashboardButton press navigation Handler//

  return (
    <View>
      <Text>DetailsScreen - {appID}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
