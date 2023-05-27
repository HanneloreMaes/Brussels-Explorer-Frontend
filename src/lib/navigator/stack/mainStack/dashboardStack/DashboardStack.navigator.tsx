import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { DashboardParamList } from '../../../types';
import { DASHBOARD_ROUTES } from '@/enums/routes';
import { TextColor, Highlight, BackgroundColor } from '@/style';

const DashboardStack = createNativeStackNavigator<DashboardParamList>();

export const DashboardStackScreen : FC = () => {

	const { nameMode } = useSelector((state: any) => state.allReducer);

	return (
		<DashboardStack.Navigator
			screenOptions={{
				headerTitleStyle: {
					color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
					fontFamily: 'ExpletusSans-Regular',
				},
				headerTintColor: nameMode === 'dark' ? Highlight.lightHighlight : Highlight.tealHighlight,
				headerStyle: {
					backgroundColor: nameMode === 'dark' ? BackgroundColor.headerBlack : BackgroundColor.light,
				},
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
};
