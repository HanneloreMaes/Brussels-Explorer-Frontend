import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
	DashboardStack: {titleScreen: string} | undefined;
};

export interface MainNavProps<T extends keyof MainStackParamList> {
	navigation: NativeStackNavigationProp<MainStackParamList, T>;
	route: RouteProp<MainStackParamList, T>;
};