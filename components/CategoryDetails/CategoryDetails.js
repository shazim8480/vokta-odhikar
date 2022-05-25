import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryDetails = ({ title, subtitle }) => {
  return (
    <View>
      <Text>{title}</Text>
      {subtitle.map((subtitle) => (
        <Text>{subtitle}</Text>
      ))}
    </View>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({});
