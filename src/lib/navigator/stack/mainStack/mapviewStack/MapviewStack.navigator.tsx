import React, { FC } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { MapView } from '@/components';
import { MAPVIEW_ROUTES } from '@/enums/routes';
import { MapviewStackParamList } from '@/lib/navigator/types';
import { MapTopBar } from '@/lib/tabBars/topTabBarMapView/TopBarMapView';

const MapOfTopBar = (props: any) => <MapTopBar {...props} />;
const MapviewStack = createMaterialTopTabNavigator<MapviewStackParamList>();

export const MapviewStackScreen: FC = () => {

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
					/>
				))
			}
		</MapviewStack.Navigator>
	);
};
