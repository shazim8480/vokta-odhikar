// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const CategoryDetails = ({ facts }) => {
  const renderItem = (item) => {
    //Accordion Header view
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.headerText}>{item.subtitle}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentText}>{item.description}</Text>
        </View>
      </>
    );
  };

  // main content
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={facts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
  },
  headerText: {
    textAlign: "left",
    fontSize: 16,
    marginLeft: 13,
    fontWeight: "700",
  },
  content: {
    padding: 25,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  contentText: {
    textAlign: "left",
    fontWeight: "600",
    color: "gray",
  },
});
