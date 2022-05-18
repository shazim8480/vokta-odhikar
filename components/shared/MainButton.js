// import { View, TouchableOpacity, Text } from "react-native";
import React from "react";

import styled from "styled-components/native";

import { colors } from "../../constants/colors";

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 20px;
  width: 120px;
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

const MainButton = ({ title }) => {
  return (
    <ButtonContainer activeOpacity={0.7}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default MainButton;
