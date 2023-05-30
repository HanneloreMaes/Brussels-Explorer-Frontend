import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type OnboardingStackParamList = {
	OnboardingScreen: {titleScreen: string} | undefined;
	QuestionRegister: {titleScreen: string} | undefined;
	MainStack: undefined;
};

export interface OnboardingNavProps<T extends keyof OnboardingStackParamList> {
	navigation: NativeStackNavigationProp<OnboardingStackParamList, T>;
	route: RouteProp<OnboardingStackParamList, T>;
}
