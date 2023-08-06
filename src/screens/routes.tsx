import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "../@types/navigationProp";
import { Search } from "./Search";

const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
