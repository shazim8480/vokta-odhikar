import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import MainTitle from "../shared/MainTitle";
import Input from "../shared/Input";

const SCREEN_WIDTH = Dimensions.get("window").width;

const ComplainerInfo = () => {
  return (
    <View style={styles.container}>
      <View>
        <MainTitle>অভিযোগকারীর তথ্য</MainTitle>
      </View>

      <View style={styles.inputContainer}>
        <Input placeholder="অভিযোগকারীর নাম" />
        <View style={styles.nameInputContainer}>
          <Input placeholder="পিতার নাম" />
          <Input placeholder="মাতার নাম" />
        </View>
        <Input multiline={true} placeholder="স্থায়ী থিকানা" />
      </View>
    </View>
  );
};

export default ComplainerInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  inputContainer: {
    flex: 1,
    width: SCREEN_WIDTH,
  },
  nameInputContainer: {
    marginHorizontal: 12,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
