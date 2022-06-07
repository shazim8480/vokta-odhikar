import * as React from "react";
// import { useState, useEffect } from "react";
import Header from "./components/shared/Header";
import HomeScreen from "./screens/HomeScreen";
import { NativeBaseProvider } from "native-base";
import { Linking, Platform } from "react-native";
import { colors } from "./constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import DetailsScreen from "./screens/DetailsScreen";
import ComplaintScreen from "./screens/ComplaintScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const DetailsStack = createNativeStackNavigator();

// bottom tabs show for inside details screen starts
const DetailsNavigator = ({ navigation, route }) => {
  return (
    <DetailsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DetailsStack.Screen
        listeners={() => ({
          tabPress: () => {
            navigation.popToTop();
          },
        })}
        name="home"
        component={HomeScreen}
      />
      <DetailsStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </DetailsStack.Navigator>
  );
};
// bottom tabs show for inside details screen ends //

const openDialScreen = () => {
  let number = "";
  if (Platform.OS === "ios") {
    number = "telprompt:${16121}";
  } else {
    number = "tel:${16121}";
  }
  Linking.openURL(number);
};

function BottomTabNavigators({ navigation, route }) {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarLabelPosition: "beside-icon",
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: colors.primary,
          height: 60,
        },
        tabBarItemStyle: {
          fontWeight: "bold",
          marginRight: 15,
        },
        tabBarLabelStyle: {
          paddingBottom: 5,
          fontSize: 12,
        },
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={20} color="white" />,
          tabBarLabel: "হোম",
        }}
        listeners={() => ({
          tabPress: () => {
            navigation.popToTop();
          },
        })}
        name="homeStack"
        component={DetailsNavigator}
      />
      <BottomTab.Screen
        listeners={() => ({
          tabPress: () => {
            openDialScreen();
            // navigation.popToTop();
          },
        })}
        options={{
          tabBarIcon: () => (
            <Feather name="phone-call" size={20} color="white" />
          ),
          tabBarLabel: "ফোনে অভিযোগ",
        }}
        name="phone-call"
        component={HomeScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <FontAwesome name="pencil-square-o" size={20} color="white" />
          ),
          tabBarLabel: "লিখিত অভিযোগ",
        }}
        name="complaint"
        component={ComplaintScreen}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitle: (props) => <Header {...props} />,
            headerTintColor: colors.primary,
          }}
        >
          {/* the top most component is regarded as the default screen */}
          <Stack.Screen name="Tab" component={BottomTabNavigators} />
          {/* <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
