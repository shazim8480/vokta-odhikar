import { Dimensions } from "react-native";
import React from "react";

import styled from "styled-components/native";

import { colors } from "../../constants/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;

const ButtonContainer = styled.TouchableOpacity`
  margin-top: 20px;
  width: ${SCREEN_WIDTH / 1.11}px;
  height: 40px;
  padding: 12px;
  border-radius: 6px;
  background-color: ${colors.primary};
`;
const ButtonText = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
`;

const MainButton = (props) => {
  return (
    <ButtonContainer
      style={{ ...props.style }}
      onPress={props.onPress}
      activeOpacity={0.7}
    >
      <ButtonText>{props.title}</ButtonText>
    </ButtonContainer>
  );
};

export default MainButton;
