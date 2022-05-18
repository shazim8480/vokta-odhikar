import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import styled from "styled-components/native";

import { colors } from "../../constants/colors";
import { StatusBar } from "expo-status-bar";

const HeaderContainer = styled.View`
  width: 100%;
  background-color: ${colors.primary};
  padding-top: 25px;
`;

const HeaderBackground = styled.View`
  width: 100%;
  padding-horizontal: 20px;
  margin-top: 20px;
  background-color: ${colors.header_bg};
  height: 70px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const HeaderText = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <>
      <StatusBar style="light" />
      <HeaderContainer>
        <HeaderBackground>
          <Image source={require("../../assets/icons/govt_logo.png")} />
          <HeaderText>জাতীয় ভোক্তা অধিকার ও অভিযোগ</HeaderText>
        </HeaderBackground>
      </HeaderContainer>
    </>
  );
};

export default Header;
