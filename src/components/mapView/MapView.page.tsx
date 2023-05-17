import React, { FC } from 'react';

import MapboxGL from '@rnmapbox/maps';

import { MapboxAccesToken } from '@/config';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const MapView: FC = () => {

	const coordinates = [ 4.3202331, 50.8422424 ];

	return (
		<MapboxGL.MapView style={{ flex: 1 }}>
			<MapboxGL.Camera zoomLevel={12} centerCoordinate={coordinates} />
		</MapboxGL.MapView>
	);
};
