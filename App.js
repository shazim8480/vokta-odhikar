import Header from "./components/shared/Header";
import HomeScreen from "./screens/HomeScreen";

// import RightsScreen from "./screens/RightsScreen";
// import CrimeScreen from "./screens/CrimeScreen";
// import PreventionScreen from "./screens/PreventionScreen";
// import PunishmentScreen from "./screens/PunishmentScreen";
// import ComplaintScreen from "./screens/ComplaintScreen";
// import ContactScreen from "./screens/ContactScreen";

import DetailsScreen from "./screens/DetailsScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Header /> */}
        <Stack.Navigator>
          {/* the top most component is regarded as the default screen */}
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerTitle: (props) => <Header {...props} /> }}
          />
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{ headerTitle: (props) => <Header {...props} /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
