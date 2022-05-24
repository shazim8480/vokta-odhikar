import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

import { colors } from "../../constants/colors";

const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${colors.primary};
  text-align: center;
`;

const MainTitle = (props) => {
  return <Title>{props.children}</Title>;
};

export default MainTitle;
