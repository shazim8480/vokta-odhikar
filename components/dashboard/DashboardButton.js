import {
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
// import styled from "styled-components/native";

// const ButtonContainer = styled.View`
//   border-radius: 5px;
//   background-color: #fff;
//   height: 150px;
//   padding-horizontal: 10px;
// `;

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const DashboardButton = ({ itemData, index }) => {
  //   console.log(itemData.item.id); // crucial //
  return (
    <TouchableWithoutFeedback onPress={() => console.log("hello")}>
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
    </TouchableWithoutFeedback>
  );
};

export default DashboardButton;

const styles = StyleSheet.create({
  buttonImg: {
    height: SCREEN_HEIGHT / 4.5,
    width: SCREEN_WIDTH / 2.3,
  },
});
