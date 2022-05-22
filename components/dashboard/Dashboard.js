import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import DashboardButton from "./DashboardButton";

import { dashboardImages } from "../../data/dashboard/dashboardImage";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dashboardImages}
        renderItem={(itemData) => <DashboardButton itemData={itemData} />}
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
