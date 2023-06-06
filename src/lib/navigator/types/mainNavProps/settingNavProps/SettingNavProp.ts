import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type SettingStackParamList = {
	Settings: {titleScreen: string} | undefined;
	Language: {titleScreen: string} | undefined;
	UsernameSetting: {titleScreen: string} | undefined;
	Onboarding: undefined;
};

export interface SettingsNavProps<T extends keyof SettingStackParamList> {
	navigation: NativeStackNavigationProp<SettingStackParamList, T>;
	route: RouteProp<SettingStackParamList, T>;
};
