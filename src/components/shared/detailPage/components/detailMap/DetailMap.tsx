import React, { FC, useEffect, useRef, useState } from 'react';

import MapboxGL, { CircleLayerStyle,SymbolLayerStyle } from '@rnmapbox/maps';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DetailMapStyles } from './DetailMap.styles';
import { DetailMapTypes } from './DetailMap.types';
import { ModalError } from '../../..';
import { MapboxAccesToken } from '@/config';
import { Highlight } from '@/style';
import { getPointsFromSpecRoutes } from '@/utils/redux/Actions';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const DetailMap: FC <DetailMapTypes> = ({ dataRoute }) => {

	const [ centerCo, setCenterCo ] = useState();
	const [ routeGeo, setRouteGeo ] = useState();
	const [ pointsGeo, setPointsGeo ] = useState();
	const [ showModalError, setShowModalError ] = useState<boolean>(false);
	const routeId = dataRoute._id;

	const markerRef = useRef<any>(null);
	const dispatch = useDispatch();
	const { pointsForSpecRoute } = useSelector((state: any) => state.allReducer);

	const fetchPointsSpecRoute = () => {
		dispatch(getPointsFromSpecRoutes(routeId));
		getCoordinatesOfPoints();
	};

	const getCoordinatesOfPoints = () => {
		const coordinatesPointsArray: any[] = [];

		if (pointsForSpecRoute?.length > 0) {
			setShowModalError(false);
			setPointsGeo({
				type: 'FeatureCollection',
				features: pointsForSpecRoute.map((point, index) => ({
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [ point.lng, point.lat ],
					},
					properties: {
						poiNumber: index + 1,
						point,
					},
				})),
			});
		} else {
			setPointsGeo(null);
			setShowModalError(true);
		}

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

			await fetch(`https://api.mapbox.com/matching/v5/mapbox/walking/${arrayCoordinates[ index ]}%3B${arrayCoordinates[ rightIndex ]}?geometries=geojson&language=en&overview=simplified&steps=true&access_token=${MapboxAccesToken}`)
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

	const objectShapesourceGeoJson = (mathingRouteArray: any, type: string) => {
		setRouteGeo({
			'type': 'FeatureCollection',
			'features': [
				{
					'type': 'Feature',
					'geometry': {
						'type': type,
						'coordinates': mathingRouteArray
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
			<MapboxGL.MapView
				style={{ flex: 1 }}
				styleURL='mapbox://styles/mapbox/streets-v12'
			>
				<MapboxGL.Camera zoomLevel={13} centerCoordinate={centerCo} animationMode='none' />
				{
					pointsGeo !== null ? (
						<MapboxGL.ShapeSource id="markers" shape={pointsGeo}>
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
					) : null
				}
				{
					routeGeo !== null ? (
						<MapboxGL.ShapeSource id='route' shape={routeGeo}>
							<MapboxGL.LineLayer id='routeLine' style={{ lineColor: Highlight.tealHighlight }} />
						</MapboxGL.ShapeSource>
					) : null
				}
				{
					showModalError ? <ModalError labelName="mapbox_error_no_routes" labelTryAgainText='mapbox_error_try_again' /> : null
				}
			</MapboxGL.MapView>
		</View>
	);
};