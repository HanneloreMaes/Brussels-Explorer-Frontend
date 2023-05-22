import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MapviewStackParamList = {
	Routes: {titleScreen: string; showInHeader: boolean; showInTopBar: boolean} | undefined;
	Points: {titleScreen: string; showInHeader: boolean; showInTopBar: boolean} | undefined;
	DetailPointPage: {titleScreen: string; dataOfCard: any; nameMode: string} | undefined;
	DetailPage: {titleScreen: string; dataOfCard: any; nameMode: string} | undefined;
};

export interface MapviewNavProps<T extends keyof MapviewStackParamList> {
	navigation: NativeStackNavigationProp<MapviewStackParamList, T>;
	route: RouteProp<MapviewStackParamList, T>;
};
