import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainButton from "../components/shared/MainButton";
// import styled from "styled-components/native";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <MainButton title="Button" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
});
