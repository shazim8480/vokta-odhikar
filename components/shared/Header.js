import { Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, StatusBar } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../constants/colors";
// import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const SCREEN_WIDTH = Dimensions.get("window").width;

const headerHeight = 60;

const StatusBarBackground = styled.View`
  background: ${colors.primary};
  padding-top: ${Platform.OS === "ios" ? Constants.statusBarHeight : 0}px;
  margin-right: ${Platform.OS === "android" ? 65 : 0}px;
  height: ${Platform.OS === "ios"
    ? Constants.statusBarHeight + headerHeight
    : headerHeight + 10}px;
`;

const HeaderBackground = styled.View`
background-color: ${colors.header_bg}
  width: ${SCREEN_WIDTH}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%
`;

const HeaderText = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <>
      <StatusBarBackground>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <SafeAreaView>
          <HeaderBackground>
            <Image source={require("../../assets/icons/govt_logo.png")} />
            <HeaderText>জাতীয় ভোক্তা অধিকার ও অভিযোগ</HeaderText>
          </HeaderBackground>
        </SafeAreaView>
      </StatusBarBackground>
    </>
  );
};

export default Header;
