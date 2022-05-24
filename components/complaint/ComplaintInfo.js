import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import MainTitle from "../shared/MainTitle";
import Input from "../shared/Input";

const SCREEN_WIDTH = Dimensions.get("window").width;

const ComplaintInfo = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <MainTitle>অভিযোগ</MainTitle>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="অভিযুক্ত প্রতিষ্ঠানের নাম" />
        <Input placeholder="অভিযুক্ত প্রতিষ্ঠানের ঠিকানা" />
        <Input placeholder="অভিযোগের বিবরণ" />
      </View>
    </View>
  );
};

export default ComplaintInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  inputContainer: {
    flex: 1,
    width: SCREEN_WIDTH,
  },
});
