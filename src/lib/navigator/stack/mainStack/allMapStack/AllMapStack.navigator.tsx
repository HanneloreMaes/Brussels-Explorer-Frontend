import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { AllMapParamList } from '../../../types';
import { ALL_MAP_ROUTES } from '@/enums/routes';
import { TextColor, Highlight, BackgroundColor } from '@/style';

const AllStack = createNativeStackNavigator<AllMapParamList>();

export const AllMapStackScreen: FC = () => {

	const { nameMode } = useSelector((state: any) => state.allReducer);

	return(
		<AllStack.Navigator
			initialRouteName='MapviewStack'
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
			{ ALL_MAP_ROUTES.map((allMapItem) => (
				<AllStack.Screen
					key={allMapItem.label}
					name={allMapItem.name as keyof AllMapParamList}
					component={allMapItem.component}
					options={({ route }) => ({
						headerShown: allMapItem.showHeader,
						title: route.params?.titleScreen,
					})}
				/>
			))}
		</AllStack.Navigator>
	);

};
