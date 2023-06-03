/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { ALL_ONBOARDING_ROUTES } from '@/enums/routes';
import { AllOnboardingStackParamList } from '@/lib/navigator/types';

const AllOnboardingStack = createNativeStackNavigator<AllOnboardingStackParamList>();

export const AllOnboardingStackScreen: FC = () => {

	const { firstRun } = useSelector((state: any) => state.allReducer);

	return(
		<AllOnboardingStack.Navigator
			initialRouteName={ firstRun === true ? 'IntroOnboarding' : 'Onboarding' }
			screenOptions={{ headerShown: false }}
		>
			{
				ALL_ONBOARDING_ROUTES.map((allOnboarding) => (
					<AllOnboardingStack.Screen
						key={allOnboarding.name}
						name={allOnboarding.name as keyof AllOnboardingStackParamList}
						component={allOnboarding.component}
						options={{
							title: allOnboarding.label
						}}
					/>
				))
			}
		</AllOnboardingStack.Navigator>
	);

};
