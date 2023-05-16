import { IRouteTypes } from './routes.types';
import { SHARED_ROUTES } from './sharedRoutes';
import { DashboardScreen, OnboardingScreen, SettingsPage } from '@/components';
import { LanguageSettings } from '@/components/settings/components';
import { SettingsStackScreen } from '@/lib/navigator/stack';

export const ONBOARDING_ROUTES: IRouteTypes[] = [
	{
		name: 'OnboardingScreen',
		component: OnboardingScreen,
		label: 'Onboarding',
	},
	SHARED_ROUTES.MainStack,
];

export const MAIN_ROUTES: IRouteTypes[] = [
	SHARED_ROUTES.DashboardStackScreen,
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
];
