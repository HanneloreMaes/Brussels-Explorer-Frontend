import React, { FC } from 'react';

import MapboxGL from '@rnmapbox/maps';
import { Text, View } from 'react-native';

import { DetailMapStyles } from './DetailMap.styles';
import { MapboxAccesToken } from '@/config';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const DetailMap: FC = () => {

	const coordinates = [ 4.3202331, 50.8422424 ];

	return (
		<View style={DetailMapStyles.mapContainer}>
			<MapboxGL.MapView style={{ flex: 1 }}>
				<MapboxGL.Camera zoomLevel={12} centerCoordinate={coordinates} />
			</MapboxGL.MapView>
		</View>
	);
};
