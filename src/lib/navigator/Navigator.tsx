import React, { FC } from 'react';

import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { navigationRef } from '../rootNavigator/RootNavigator';
import { APP_ROUTES } from '@/enums/routes';
import { BackgroundColor, TextColor } from '@/style';

const RootStack = createNativeStackNavigator();

export const Navigator: FC = () => {

	const { nameMode } = useSelector((state: any) => state.allReducer);

	const lightTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: BackgroundColor.light,
			text: TextColor.darkText,
		}
	};
	const darkTheme = {
		...DarkTheme,
		colors: {
			...DarkTheme.colors,
			background: BackgroundColor.dark,
			text: TextColor.lightText,
		}
	};
	return (
		<NavigationContainer ref={navigationRef} theme={nameMode === 'dark' ? darkTheme : lightTheme}>
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
};
