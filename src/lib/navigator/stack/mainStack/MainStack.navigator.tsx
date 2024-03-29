import React, { FC } from 'react';

import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { MainStackTabBar } from '../../../tabBars';
import { MainStackParamList } from '../../types';
import { MAIN_ROUTES, UN_AUTH_MAIN_ROUTES } from '@/enums/routes';

const MainStack = createBottomTabNavigator<MainStackParamList>();
const MainTabBar = (props: BottomTabBarProps) => <MainStackTabBar {...props} />;

export const MainStackScreen: FC = () => {
	const { unAuth } = useSelector((state: any) => state.allReducer);
	return (
		<MainStack.Navigator
			initialRouteName='DashboardStack'
			screenOptions={{ headerShown: false, unmountOnBlur: true }}
			tabBar={MainTabBar}
		>
			{
				unAuth === true ? (
					UN_AUTH_MAIN_ROUTES.map((mainItem) => (
						<MainStack.Screen
							key={mainItem.name as keyof MainStackParamList}
							name={mainItem.name as keyof MainStackParamList}
							component={mainItem.component}
							options={{
								title: mainItem.label
							}}
						/>
					))
				) : (
					MAIN_ROUTES.map((mainItem) => (
						<MainStack.Screen
							key={mainItem.name as keyof MainStackParamList}
							name={mainItem.name as keyof MainStackParamList}
							component={mainItem.component}
							options={{
								title: mainItem.label
							}}
						/>
					))
				)
			}
		</MainStack.Navigator>
	);
};
