import React, { FC, useEffect, useState } from 'react';

import MapboxGL from '@rnmapbox/maps';
import { useDispatch, useSelector } from 'react-redux';

import { MapboxAccesToken } from '@/config';
import { getPointsFromSpecRoutes } from '@/utils/redux/Actions';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const MapView: FC = () => {

	const coordinates = [ 4.3570964, 50.845504 ];
	const [ firstCoordinateLng, setFirstCoordinateLng ] = useState<number>(0);
	const [ firstCoordinateLat, setFirstCoordinateLat ] = useState<number>(0);

	const dispatch = useDispatch();
	const { routes, pointsForSpecRoute } = useSelector((state: any) => state.allReducer);

	const mapRoutes = () => {
		routes.map((routeDetail: any) => {
			return fetchSpecRoute(routeDetail._id);
		});
		setFirstCoordinateLng(pointsForSpecRoute[ 0 ].lng);
		setFirstCoordinateLat(pointsForSpecRoute[ 0 ].lat);
	};
	const fetchSpecRoute = (idRoute: string) => {
		dispatch(getPointsFromSpecRoutes(idRoute));
	};

	useEffect(() => {
		mapRoutes();
	}, []);

	return (
		<MapboxGL.MapView style={{ flex: 1 }}>
			<MapboxGL.Camera zoomLevel={12} centerCoordinate={coordinates} animationMode='none' />
			<MapboxGL.PointAnnotation id="point" coordinate={[ firstCoordinateLng, firstCoordinateLat ]} />
		</MapboxGL.MapView>
	);
};
