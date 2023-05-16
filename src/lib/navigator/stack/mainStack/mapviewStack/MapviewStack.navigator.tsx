import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { MapviewStackParamList } from '../../../types';
import { MAPVIEW_ROUTES } from '@/enums/routes';
import { TextColor, Highlight, BackgroundColor } from '@/style';
import '@/utils/i18n/i18n';

const MapviewStack = createNativeStackNavigator<MapviewStackParamList>();

export const MapviewStackScreen: FC = () => {

	const { i18n } = useTranslation();

	return (
		<MapviewStack.Navigator
			screenOptions={{
				headerTitleStyle: { color: TextColor.darkText },
				headerTintColor: Highlight.tealHighlight,
				contentStyle: {
					backgroundColor: BackgroundColor.light
				}
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
	)

};
