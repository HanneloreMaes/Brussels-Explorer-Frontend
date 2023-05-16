import { DashboardStackScreen, MainStackScreen, OnboardingStackScreen } from '@/lib/navigator/stack';

export const SHARED_ROUTES = {
	OnboardingStack:{
		name: 'Onboarding',
		component: OnboardingStackScreen,
		label: 'OnboardingStack'
	},
	DashboardStackScreen: {
		name: 'DashboardStack',
		component: DashboardStackScreen,
		label: 'DashboardStack',
	},
	Main: {
		name: 'MainStack',
		component: MainStackScreen,
		label: 'MainStack'
	},
};
