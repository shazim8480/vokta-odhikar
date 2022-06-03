import Header from "./components/shared/Header";
import HomeScreen from "./screens/HomeScreen";
import { NativeBaseProvider } from "native-base";
import { Image } from "react-native";
import { colors } from "./constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import DetailsScreen from "./screens/DetailsScreen";
import ComplaintScreen from "./screens/ComplaintScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
// import { HeaderBackButton } from "@react-navigation/elements";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigators() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: colors.header_bg,
        tabBarItemStyle: {
          backgroundColor: colors.primary,
          fontWeight: "bold",
        },
      }}
    >
      {/* // this component
      will change into contact dialer */}
      {/* <BottomTab.Screen name="হোম" component={HomeScreen} /> */}
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <Feather name="phone-call" size={20} color="white" />
          ),
        }}
        name="ফোনে অভিযোগ"
        component={HomeScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <FontAwesome name="pencil-square-o" size={20} color="white" />
          ),
        }}
        name="লিখিত অভিযোগ"
        component={ComplaintScreen}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* buttons */}
        <Stack.Navigator
          screenOptions={{
            headerTitle: (props) => <Header {...props} />,
            headerTintColor: colors.primary,
            // headerBackVisible: false,
            // headerLeft: (isActive) => {
            //   return (
            //     <HeaderBackButton
            //       style={isActive ? styles.active : styles.inActive}
            //       title="Back"
            //     />
            //   );
            // },
          }}
        >
          <Stack.Screen name="TabScreens" component={BottomTabNavigators} />
          {/* the top most component is regarded as the default screen */}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
