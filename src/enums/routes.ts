import { IRouteTypes } from './routes.types';
import { SHARED_ROUTES } from './sharedRoutes';
import { DashboardScreen, MapView, OnboardingScreen, QuestionRegister, SearchPage, SettingsPage } from '@/components';
import { LanguageSettings } from '@/components/settings/components';
import { MapviewStackScreen, SearchStackScreen, SettingsStackScreen } from '@/lib/navigator/stack';

export const ONBOARDING_ROUTES: IRouteTypes[] = [
	SHARED_ROUTES.OnboardingPage,
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
		showHeader: false,
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
	},
	SHARED_ROUTES.Search,
	SHARED_ROUTES.DetailPageScreen,
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
	SHARED_ROUTES.Search,
	SHARED_ROUTES.DetailPageScreen,
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
	SHARED_ROUTES.OnboardingPage,
];

export const APP_ROUTES: IRouteTypes[] = [
	SHARED_ROUTES.OnboardingStack,
	SHARED_ROUTES.Main,
];
