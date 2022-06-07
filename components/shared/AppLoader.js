import { ActivityIndicator, View } from "react-native";
import React from "react";

import { colors } from "../../constants/colors.js";

const AppLoader = () => {
  return (
    <View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </View>
  );
};

export default AppLoader;
