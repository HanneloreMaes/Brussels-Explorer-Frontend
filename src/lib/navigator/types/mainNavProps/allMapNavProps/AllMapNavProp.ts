import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AllMapParamList = {
	DetailPointPage: {titleScreen: string; dataOfCard: any; nameMode: string} | undefined;
	DetailPage: {titleScreen: string; dataOfCard: any; nameMode: string} | undefined;
	MapviewStack: {titleScreen: string} | undefined;
	Routes: {titleScreen: string; showInHeader: boolean; showInTopBar: boolean} | undefined;
	Points: {titleScreen: string; showInHeader: boolean; showInTopBar: boolean} | undefined;
};

export interface AllMapNavProps<T extends keyof AllMapParamList> {
	navigation: NativeStackNavigationProp<AllMapParamList, T>;
	route: RouteProp<AllMapParamList, T>;
};
