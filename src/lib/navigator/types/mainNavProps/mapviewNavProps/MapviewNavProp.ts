import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MapviewStackParamList = {
	Map: {titleScreen: string} | undefined;
};

export interface MapviewNavProps<T extends keyof MapviewStackParamList> {
	navigation: NativeStackNavigationProp<MapviewStackParamList, T>;
	route: RouteProp<MapviewStackParamList, T>;
};
