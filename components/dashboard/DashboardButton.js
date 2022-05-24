import { Pressable, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const DashboardButton = ({ itemData, index, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        style={[
          styles.buttonImg,
          {
            marginTop: index === 0 || index === 1 ? 15 : 10,
            marginRight: index % 2 === 0 ? 0 : 5,
          },
        ]}
        resizeMode="contain"
        source={itemData.item.img}
      />
    </Pressable>
  );
};

export default DashboardButton;

const styles = StyleSheet.create({
  buttonImg: {
    height: SCREEN_HEIGHT / 4.5,
    width: SCREEN_WIDTH / 2.3,
  },
});
