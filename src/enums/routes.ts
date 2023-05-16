import { IRouteTypes } from './routes.types';
import { SHARED_ROUTES } from './sharedRoutes';
import { OnboardingScreen } from '@/components';

export const ONBOARDING_ROUTES: IRouteTypes[] = [
	{
		name: 'OnboardingScreen',
		component: OnboardingScreen,
		label: 'Onboarding',
	},
];

export const APP_ROUTES: IRouteTypes[] = [
	SHARED_ROUTES.OnboardingStack,
];
