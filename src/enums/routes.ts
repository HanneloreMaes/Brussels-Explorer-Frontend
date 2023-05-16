import { IRouteTypes } from './routes.types';
import { SHARED_ROUTES } from './sharedRoutes';
import { DashboardScreen, OnboardingScreen } from '@/components';

export const ONBOARDING_ROUTES: IRouteTypes[] = [
	{
		name: 'OnboardingScreen',
		component: OnboardingScreen,
		label: 'Onboarding',
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

export const APP_ROUTES: IRouteTypes[] = [
	SHARED_ROUTES.OnboardingStack,
];
