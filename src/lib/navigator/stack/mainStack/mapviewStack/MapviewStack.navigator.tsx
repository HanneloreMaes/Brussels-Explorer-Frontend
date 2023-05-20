import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { MapviewStackParamList } from '../../../types';
import { MAPVIEW_ROUTES } from '@/enums/routes';
import { TextColor, Highlight, BackgroundColor } from '@/style';

import '@/utils/i18n/i18n';

const MapviewStack = createNativeStackNavigator<MapviewStackParamList>();

export const MapviewStackScreen: FC = () => {

	const { i18n } = useTranslation();
	const { nameMode } = useSelector((state: any) => state.allReducer);

	return (
		<MapviewStack.Navigator
			screenOptions={{
				headerTitleStyle: {
					color: nameMode === 'light' ? TextColor.lightText : TextColor.darkText,
				},
				headerTintColor: nameMode === 'light' ? Highlight.lightHighlight : Highlight.tealHighlight,
				headerStyle: {
					backgroundColor: BackgroundColor.headerBlack,
				},
			}}
		>
			{MAPVIEW_ROUTES.map((mapviewItem: any) => (
				<MapviewStack.Screen
					key={mapviewItem.name as keyof MapviewStackParamList}
					name={mapviewItem.name as keyof MapviewStackParamList}
					component={mapviewItem.component}
					options={{
						headerShown: mapviewItem.showHeader,
						title: i18n.t(`${mapviewItem.label}`) as string || mapviewItem.label,
					}}
				/>
			))}
		</MapviewStack.Navigator>
	);

};
