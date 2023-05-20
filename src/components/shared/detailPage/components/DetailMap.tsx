import React, { FC, useEffect, useState } from 'react';

import MapboxGL from '@rnmapbox/maps';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DetailMapStyles } from './DetailMap.styles';
import { DetailMapTypes } from './DetailMap.types';
import { MapboxAccesToken } from '@/config';
import { getPointsFromSpecRoutes } from '@/utils/redux/Actions';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const DetailMap: FC <DetailMapTypes> = ({ dataRoute }) => {

	const [ centerCo, setCenterCo ] = useState();
	const [ routeGeo, setRouteGeo ] = useState();
	const routeId = dataRoute._id;
	const dispatch = useDispatch();
	const { pointsForSpecRoute } = useSelector((state: any) => state.allReducer);
	console.log('POINT', pointsForSpecRoute);

	const fetchPointsSpecRoute = () => {
		dispatch(getPointsFromSpecRoutes(routeId));
		getCoordinatesOfPoints();
	};

	const getCoordinatesOfPoints = () => {
		const coordinatesPointsArray: any[] = [];

		pointsForSpecRoute.map((coordinatePoints: any) => {
			const lngPoint = coordinatePoints.lng;
			const latPoint = coordinatePoints.lat;
			const coordinatesPerPointArray = [ lngPoint, latPoint ];
			coordinatesPointsArray.push(coordinatesPerPointArray);

			return coordinatesPointsArray;
		});
		matchRoute(coordinatesPointsArray);

	};

	const matchRoute = (arrayCoordinates: any) => {
		setCenterCo(arrayCoordinates[ 0 ]);
		const coordinatesForMatchingRoute: any[] = [];

		arrayCoordinates.map(async (coordinate: any, index: any) => {
			const rightIndex = index === arrayCoordinates.length - 1 ?
				index - (arrayCoordinates.length - 1)
				: index + 1;

			await fetch(`https://api.mapbox.com/matching/v5/mapbox/driving/${arrayCoordinates[ index ]}%3B${arrayCoordinates[ rightIndex ]}?geometries=geojson&language=en&overview=simplified&steps=true&access_token=${MapboxAccesToken}`)
				.then(resp => resp.json())
				.then((data) => {
					const arrayMatchings = data.matchings[ 0 ];
					const geometryCoordinatesRoute = arrayMatchings.geometry.coordinates;

					geometryCoordinatesRoute.map((routesForEachPoint: any) => {
						coordinatesForMatchingRoute.push(routesForEachPoint);

						return coordinatesForMatchingRoute;
					});
				});
		});
		objectShapesourceGeoJson(coordinatesForMatchingRoute, 'LineString');
	};

	const objectShapesourceGeoJson = (mathinRouteArray: any, type: string) => {
		setRouteGeo({
			'type': 'FeatureCollection',
			'features': [
				{
					'type': 'Feature',
					'geometry': {
						'type': type,
						'coordinates': mathinRouteArray
					}
				}
			]
		});
	};

	useEffect(() => {
		fetchPointsSpecRoute();
	},[ dataRoute ]);

	return (
		<View style={DetailMapStyles.mapContainer}>
			<MapboxGL.MapView style={{ flex: 1 }}>
				<MapboxGL.Camera zoomLevel={12} centerCoordinate={centerCo} />
				{
					pointsForSpecRoute.map((point: any) => {
						console.log('Test', point);
						const coordinates = [ point.lng, point.lat ];
						return <MapboxGL.PointAnnotation key={point._id} id="point" coordinate={coordinates} title={point.name} />;
					})
				}
				<MapboxGL.ShapeSource id='line1' shape={routeGeo}>
					<MapboxGL.LineLayer id='linelayer1' style={{ lineColor:'red' }} />
				</MapboxGL.ShapeSource>
			</MapboxGL.MapView>
		</View>
	);
};
