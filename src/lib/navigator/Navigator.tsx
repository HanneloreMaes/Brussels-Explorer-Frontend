import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationRef } from '../rootNavigator/RootNavigator';
import { APP_ROUTES } from '@/enums/routes';
import { BackgroundColor } from '@/style';

const RootStack = createNativeStackNavigator();

const navTheme = {
	colors: {
		background: BackgroundColor.light
	}
};

export const Navigator: FC = () => (
	<NavigationContainer ref={navigationRef} theme={navTheme}>
		<RootStack.Navigator
			screenOptions={{ headerShown: false }}
		>
			{
				APP_ROUTES.map((navigatorItem) => (
					<RootStack.Screen
						key={navigatorItem.name}
						name={navigatorItem.name}
						component={navigatorItem.component}
					/>
				))
			}
		</RootStack.Navigator>
	</NavigationContainer>
);
