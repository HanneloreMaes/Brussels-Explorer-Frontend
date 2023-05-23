import React, { FC } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTranslation } from 'react-i18next';

import { MapView } from '@/components';
import { MAPVIEW_ROUTES } from '@/enums/routes';
import { MapviewStackParamList } from '@/lib/navigator/types';
import { MapTopBar } from '@/lib/tabBars/topTabBarMapView/TopBarMapView';
import '@/utils/i18n/i18n';

const MapOfTopBar = (props: any) => <MapTopBar {...props} />;
const MapviewStack = createMaterialTopTabNavigator<MapviewStackParamList>();

export const MapviewStackScreen: FC = () => {

	const { i18n } = useTranslation();

	return(
		<MapviewStack.Navigator
			tabBar={MapOfTopBar}
		>
			{
				MAPVIEW_ROUTES.map((mapItem) => (
					<MapviewStack.Screen
						key={mapItem.label}
						name={mapItem.name as keyof MapviewStackParamList}
						component={mapItem.component}
						options={{
							title: i18n.t(mapItem.label as string) as string,
						}}
						initialParams={{
							showInHeader: mapItem.showHeader,
							showInTopBar: mapItem.showTopTab,
						}}
					/>
				))
			}
		</MapviewStack.Navigator>
	);
};
