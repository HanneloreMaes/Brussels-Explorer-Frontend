import { OnboardingScreen, SearchPage } from '@/components';
import { DetailPage, DetailPointPage } from '@/components/shared';
import { DashboardStackScreen, AllMapStackScreen, MainStackScreen, OnboardingStackScreen } from '@/lib/navigator/stack';

export const SHARED_ROUTES = {
	OnboardingStack:{
		name: 'Onboarding',
		component: OnboardingStackScreen,
		label: 'OnboardingStack'
	},
	OnboardingPage: {
		name: 'OnboardingScreen',
		component: OnboardingScreen,
		label: 'Onboarding',
	},
	DashboardStackScreen: {
		name: 'DashboardStack',
		component: DashboardStackScreen,
		label: 'DashboardStack',
	},
	Search: {
		name: 'SearchPage',
		component: SearchPage,
		label: 'routes_label_searchPage',
	},
	Main: {
		name: 'MainStack',
		component: MainStackScreen,
		label: 'MainStack'
	},
	AllMapStack: {
		name: 'AllStack',
		component: AllMapStackScreen,
		label: 'AllStack',
		showHeader: false,
		showTopTab: false,
	},
	DetailPageScreen: {
		name: 'DetailPage',
		component: DetailPage,
		label: 'Detail',
		showHeader: true,
		showTopTab: false,
	},
	DetailPointPageScreen: {
		name: 'DetailPointPage',
		component: DetailPointPage,
		label: 'DetailPoint',
		showHeader: true,
		showTopTab: false,
	},
};
