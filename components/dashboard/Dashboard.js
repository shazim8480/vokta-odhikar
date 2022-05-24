import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import DashboardButton from "./DashboardButton";

import { dashboardImages } from "../../data/dashboard/dashboardImage";

const Dashboard = ({ navigation }) => {
  const renderButtonItem = (itemData) => {
    const pressButtonHandler = () => {
      navigation.navigate("DetailsScreen", {
        appID: itemData.item.id,
      });
    };

    return (
      <DashboardButton
        onPress={pressButtonHandler}
        itemData={itemData}
        navigation={navigation}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dashboardImages}
        renderItem={renderButtonItem}
        keyExtractor={(item) => item.id}
        numColumns="2"
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
