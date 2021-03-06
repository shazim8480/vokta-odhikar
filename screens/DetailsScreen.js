import { StyleSheet, Text, View, FlatList } from "react-native";
// import * as SplashScreen from "expo-splash-screen";
import React from "react";
// import ComplaintScreen from "./ComplaintScreen";

import { dashboardImages } from "../data/dashboard/dashboardImage";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";

import ContactScreen from "./ContactScreen";

const DetailsScreen = ({ route }) => {
  const appID = route.params.appID; // comes from DashboardButton press navigation Handler//

  // render component for loading separate app button data//

  const displayAppButtonData = dashboardImages.filter((dashboardItem) => {
    // checking the specific id of the button if it exists in the data //
    return dashboardItem.id.indexOf(appID) >= 0;
  });

  const renderAppButtonData = (itemData) => {
    return (
      <>
        {itemData.item.id == 6 ? (
          <ContactScreen information={itemData.item.information} />
        ) : (
          <CategoryDetails facts={itemData.item.facts} />
        )}
      </>
    );
  };

  return (
    <View styles={styles.container}>
      <FlatList
        data={displayAppButtonData}
        renderItem={renderAppButtonData}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
