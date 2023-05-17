import { IRouteTypes } from './routes.types';
import { SHARED_ROUTES } from './sharedRoutes';
import { DashboardScreen, MapView, OnboardingScreen, QuestionRegister, SearchPage, SettingsPage } from '@/components';
import { LanguageSettings } from '@/components/settings/components';
import { MapviewStackScreen, SearchStackScreen, SettingsStackScreen } from '@/lib/navigator/stack';

export const ONBOARDING_ROUTES: IRouteTypes[] = [
	{
		name: 'OnboardingScreen',
		component: OnboardingScreen,
		label: 'Onboarding',
	},
	{
		name: 'QuestionRegister',
		component: QuestionRegister,
		label: 'Question',
	},
	SHARED_ROUTES.Main,
];

export const MAIN_ROUTES: IRouteTypes[] = [
	SHARED_ROUTES.DashboardStackScreen,
	{
		name: 'MapviewStack',
		component: MapviewStackScreen,
		label: 'MapviewStack',
	},
	{
		name: 'Search',
		component: SearchStackScreen,
		label: 'OverviewStack',
	},
	{
		name: 'SettingStack',
		component: SettingsStackScreen,
		label: 'SettingStack',
	},
];

export const DASHBOARD_ROUTES: IRouteTypes[] = [
	{
		name: 'DashboardScreen',
		component: DashboardScreen,
		label: 'Dashboard',
		showHeader: false,
	}
];

export const MAPVIEW_ROUTES: IRouteTypes[] = [
	{
		name: 'Map',
		component: MapView,
		label: 'MapView',
		showHeader: false,
	},
];

export const SEARCH_ROUTES: IRouteTypes[] = [
	{
		name: 'SearchPage',
		component: SearchPage,
		label: 'routes_label_searchPage',
	},
];

export const SETTINGS_ROUTES: IRouteTypes[] = [
	{
		name: 'Settings',
		component: SettingsPage,
		label: 'routes_label_settings',
	},
	{
		name: 'Language',
		component: LanguageSettings,
		label: 'routes_label_language',
	},
	SHARED_ROUTES.OnboardingStack,
];

export const APP_ROUTES: IRouteTypes[] = [
	SHARED_ROUTES.OnboardingStack,
	SHARED_ROUTES.Main,
];
