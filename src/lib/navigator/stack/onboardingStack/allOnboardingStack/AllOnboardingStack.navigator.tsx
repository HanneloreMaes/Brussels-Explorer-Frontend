/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { OnboardingStackScreen } from '../OnboardingStack.navigator';
import { IntroOnboaridng } from '@/components';

const AllOnboardingStack = createNativeStackNavigator();

export const AllOnboardingStackScreen: FC = () => {

	const { firstRun } = useSelector((state: any) => state.allReducer);

	return(
		<AllOnboardingStack.Navigator
			screenOptions={{ headerShown: false }}
		>
			{
				firstRun === false ? (
					<AllOnboardingStack.Screen name='infoOnboarding' component={IntroOnboaridng} />
				) : (
					<AllOnboardingStack.Screen name='Onboarding' component={OnboardingStackScreen} />
				)
			}
		</AllOnboardingStack.Navigator>
	);

};
