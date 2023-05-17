import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardParamList } from '../../../types';
import { DASHBOARD_ROUTES } from '@/enums/routes';
import { TextColor, Highlight, BackgroundColor } from '@/style';

const DashboardStack = createNativeStackNavigator<DashboardParamList>();

export const DashboardStackScreen : FC = () => (
	<DashboardStack.Navigator
		screenOptions={{
			headerTitleStyle: { color: TextColor.darkText },
			headerTintColor: Highlight.tealHighlight,
			contentStyle: {
				backgroundColor: BackgroundColor.light
			}
		}}
	>
		{
			DASHBOARD_ROUTES.map((dashboardItem) => (
				<DashboardStack.Screen
					key={dashboardItem.name}
					name={dashboardItem.name as keyof DashboardParamList}
					component={dashboardItem.component}
					options={({ route }) => ({
						headerShown: dashboardItem.showHeader,
						title: route.params?.titleScreen || dashboardItem.label
					})}
				/>
			))
		}
	</DashboardStack.Navigator>
);
