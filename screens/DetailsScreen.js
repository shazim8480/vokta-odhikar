import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ComplaintScreen from "./ComplaintScreen";

const DetailsScreen = ({ route }) => {
  const appID = route.params.appID; // comes from DashboardButton press navigation Handler//

  return (
    <>
      {/* <View>
        <Text>DetailsScreen - {appID}</Text>
      </View> */}

      <ComplaintScreen />
    </>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
