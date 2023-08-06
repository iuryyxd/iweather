import { NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Search: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

export type SearchProps = NativeStackScreenProps<RootStackParamList, "Search">;
