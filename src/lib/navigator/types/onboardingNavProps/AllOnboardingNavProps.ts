import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AllOnboardingStackParamList = {
	IntroOnboarding: {titleScreen: string} | undefined;
	Onboarding: {titleScreen: string} | undefined;
};

export interface AllOnboardingNavProps<T extends keyof AllOnboardingStackParamList> {
	navigation: NativeStackNavigationProp<AllOnboardingStackParamList, T>;
	route: RouteProp<AllOnboardingStackParamList, T>;
}
