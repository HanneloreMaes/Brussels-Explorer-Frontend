import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type SearchPageParamList = {
	SearchPage: {titleScreen: string} | undefined;
	DetailPage: {titleScreen: string; dataOfCard: any; nameMode: string} | undefined;
	Onboarding: { showInHeader: boolean } | undefined;
};

export interface SearchNavProps<T extends keyof SearchPageParamList> {
	navigation: NativeStackNavigationProp<SearchPageParamList, T>;
	route: RouteProp<SearchPageParamList, T>;
};
