import React, { FC, useEffect, useState } from 'react';

import MapboxGL, { CircleLayerStyle, SymbolLayerStyle } from '@rnmapbox/maps';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DetailMapStyles } from '../shared/detailPage/components/DetailMap.styles';
import { MapboxAccesToken } from '@/config';
import { getPointsFromSpecRoutes } from '@/utils/redux/Actions';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const MapView: FC = () => {

	const coordinates = [ 4.3570964, 50.845504 ];
	const [ firstPointRouteGeo, setFirstPointRouteGeo ] = useState();

	const dispatch = useDispatch();
	const { routes, pointsForSpecRoute } = useSelector((state: any) => state.allReducer);

	const mapRoutes = () => {
		routes.map((routeDetail: any) => {
			return fetchSpecRoute(routeDetail._id);
		});
		if (routes?.length > 0) {
			setFirstPointRouteGeo({
				type: 'FeatureCollection',
				features: routes.map((route, index) => ({
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [ route.startLng, route.startLat ],
					},
					properties: {
						poiNumber: index + 1,
						route,
					},
				})),
			});
		} else {
			setFirstPointRouteGeo(null);
		}
	};
	const fetchSpecRoute = (idRoute: string) => {
		dispatch(getPointsFromSpecRoutes(idRoute));
	};

	useEffect(() => {
		mapRoutes();
	}, []);

	return (
		<MapboxGL.MapView style={{ flex: 1 }}>
			<MapboxGL.Camera zoomLevel={13} centerCoordinate={coordinates} animationMode='none' />
			<MapboxGL.ShapeSource id="markers" shape={firstPointRouteGeo}>
				<MapboxGL.CircleLayer
					id="markerCircle"
					belowLayerID="markerText"
					style={DetailMapStyles.marker as CircleLayerStyle}
				/>
				<MapboxGL.SymbolLayer
					id="markerText"
					style={DetailMapStyles.markerText as SymbolLayerStyle}
				/>
			</MapboxGL.ShapeSource>
		</MapboxGL.MapView>
	);
};
