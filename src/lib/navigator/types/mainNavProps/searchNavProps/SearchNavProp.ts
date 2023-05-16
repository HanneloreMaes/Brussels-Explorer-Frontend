import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type SearchPageParamList = {
	SearchPage: {titleScreen: string} | undefined;
};

export interface SearchNavProps<T extends keyof SearchPageParamList> {
	navigation: NativeStackNavigationProp<SearchPageParamList, T>;
	route: RouteProp<SearchPageParamList, T>;
};
