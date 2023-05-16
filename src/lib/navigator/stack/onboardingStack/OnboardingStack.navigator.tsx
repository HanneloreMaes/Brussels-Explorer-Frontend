/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingStackParamList } from '../../types';
import { ONBOARDING_ROUTES } from '@/enums/routes';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingStackScreen: FC = () => {
	return(
		<OnboardingStack.Navigator
			screenOptions={{ headerShown: false }}
		>
			{ ONBOARDING_ROUTES.map((onboardingItem) => (
				<OnboardingStack.Screen
					key={onboardingItem.label}
					name={onboardingItem.name as keyof OnboardingStackParamList}
					component={onboardingItem.component}
					initialParams={{
						titleScreen: onboardingItem.label,
					}}
				/>
			))}
		</OnboardingStack.Navigator>
	);

};
