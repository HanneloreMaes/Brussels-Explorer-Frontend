import { IRouteTypes } from './routes.types';
import { SHARED_ROUTES } from './sharedRoutes';
import { DashboardScreen, MapView, PointMapView, QuestionRegister, SettingsPage } from '@/components';
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
	SHARED_ROUTES.AllMapStack,
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
	SHARED_ROUTES.DetailPointPageScreen,
];

export const MAPVIEW_ROUTES: IRouteTypes[] = [
	{
		name: 'Routes',
		component: MapView,
		label: 'Map',
		showHeader: false,
		showTopTab: true,
	},
	{
		name: 'Points',
		component: PointMapView,
		label: 'PointMap',
		showHeader: false,
		showTopTab: true,
	},
];

export const ALL_MAP_ROUTES: IRouteTypes[] = [
	SHARED_ROUTES.DetailPageScreen,
	SHARED_ROUTES.DetailPointPageScreen,
	{
		name: 'MapviewStack',
		component: MapviewStackScreen,
		label: 'MapviewStack',
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
