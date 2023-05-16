import React, { FC } from 'react';

import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { MainStackTabBar } from '../../../tabBars';
import { MainStackParamList } from '../../types';
import { MAIN_ROUTES } from '@/enums/routes';

const MainStack = createBottomTabNavigator<MainStackParamList>();
// const MainTabBar = (props: BottomTabBarProps) => <MainStackTabBar {...props} />;

export const MainStackScreen: FC = () => (
	<MainStack.Navigator
		initialRouteName='DashboardStack'
		screenOptions={{ headerShown: false, unmountOnBlur: true }}
		// tabBar={MainTabBar}
	>
		{MAIN_ROUTES.map((mainItem) => (
			<MainStack.Screen
				key={mainItem.name as keyof MainStackParamList}
				name={mainItem.name as keyof MainStackParamList}
				component={mainItem.component}
				options={{
					title: mainItem.label
				}}
			/>
		))}
	</MainStack.Navigator>
);
