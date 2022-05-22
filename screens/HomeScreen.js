import React from "react";
import styled from "styled-components/native";

import { colors } from "../constants/colors";
import Dashboard from "../components/dashboard/Dashboard";

const HomeBackground = styled.View`
  background-color: ${colors.body};
  width: 100%;
  flex: 1;
  flex-direction: row;
  padding: 20px;
  align-items: flex-start;
`;

const HomeScreen = () => {
  return (
    <HomeBackground>
      <Dashboard />
    </HomeBackground>
  );
};

export default HomeScreen;
