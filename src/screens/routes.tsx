import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "../@types/navigationProp";
import { Search } from "./Search";
import { Dashboard } from "./Dashboard";

const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
