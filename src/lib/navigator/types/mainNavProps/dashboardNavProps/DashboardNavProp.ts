import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type DashboardParamList = {
	DashboardScreen: {titleScreen: string} | undefined;
};

export interface DashboardNavProps<T extends keyof DashboardParamList> {
	navigation: NativeStackNavigationProp<DashboardParamList, T>;
	route: RouteProp<DashboardParamList, T>;
};
