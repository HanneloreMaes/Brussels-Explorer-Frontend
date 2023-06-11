import React, { FC, useEffect, useState } from 'react';

import MapboxGL, { CircleLayerStyle,SymbolLayerStyle } from '@rnmapbox/maps';
import * as geolib from 'geolib';
import { View, Text, TouchableOpacity } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request } from 'react-native-permissions';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';

import { DetailMapStyles } from './DetailMap.styles';
import { ModalError } from '../../..';
import { IconMarker } from '@/components/map/components/userLocationIcon/UserLocationIcon.page';
import { DescriptionStyles } from '@/components/map/mapView/components/descriptionModal/page/DescriptionModal.styles';
import { MapboxAccesToken } from '@/config';
import { BackgroundColor, DefaultShadow, Highlight, TextColor } from '@/style';
import { getPointsFromSpecRoutes } from '@/utils/redux/Actions';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const DetailMap: FC = (props: any) => {

	const coordinatesPolygonArray: any[] = [];

	const [ centerCo, setCenterCo ] = useState();
	const [ routeGeo, setRouteGeo ] = useState<any>();
	const [ pointsGeo, setPointsGeo ] = useState<any>();
	const [ showModalError, setShowModalError ] = useState<boolean>(false);

	const [ showName, setShowName ] = useState<boolean>(false);
	const [ namePoint, setNamePoint ] = useState<string>('');
	const [ dataPoint, setDataPoint ] = useState<any>();

	const [ userInPolygon, setUserInPolygon ] = useState<boolean>(false);
	const [ locationPermissionAllowed, setLocationPermissionAllowed ] = useState<boolean>(false);
	const [ location, setLocation ] = useState<any>([]);

	const routeId = props?.dataRoute._id;

	const dispatch = useDispatch();
	const { pointsForSpecRoute, nameMode } = useSelector((state: any) => state.allReducer);

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
				features: pointsForSpecRoute.map((point: any, index: number) => ({
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
			const coordinatesPerPointInPolygonObject = { lat: lngPoint, lng: latPoint };
			coordinatesPointsArray.push(coordinatesPerPointArray);
			coordinatesPolygonArray.push(coordinatesPerPointInPolygonObject);

			return {
				coordinatesPointsArray,
				coordinatesPolygonArray
			};
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

			await fetch(`https://api.mapbox.com/matching/v5/mapbox/cycling/${arrayCoordinates[ index ]}%3B${arrayCoordinates[ rightIndex ]}?geometries=geojson&language=en&overview=simplified&steps=true&access_token=${MapboxAccesToken}`)
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

	const getCurrentLocation = () => {

		Geolocation.watchPosition(
			position => {
				const { latitude, longitude, heading } = position.coords;
				setLocation([
					longitude,
					latitude,
				]);
			},
			error => {
				console.warn('Error MapView watchPosition', error);
			},
			{
				enableHighAccuracy: true,
				distanceFilter: 0,
				interval: 10000,
				fastestInterval: 5000,
			},
		);
	};

	const onHandleSetCurrentLocation = () => {
		if (locationPermissionAllowed) {
			getCurrentLocation();
		} else {
			const locationPermission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
			request(locationPermission)
				.then((status: any) => {

					if (status === 'granted') {
						setLocationPermissionAllowed(true);
						getCurrentLocation();
					}
				})
				.catch((error: any) => {
					console.warn('Error MapView watchPosition', error);
				});
		}
	};

	useEffect(() => {
		if ( geolib.isPointInPolygon(location, coordinatesPolygonArray) === true ) {
			console.log('POLYGON', coordinatesPolygonArray);
			return setUserInPolygon(true);
		}
		console.log('POLYGON', coordinatesPolygonArray);
		return setUserInPolygon(false);

	}, [ props?.navigation ]);

	useEffect(() => {
		fetchPointsSpecRoute();
		onHandleSetCurrentLocation();
	},[ props?.dataRoute ]);

	return (
		<View style={
			props?.scaleBig === true ? DetailMapStyles.mapContainerBig : DetailMapStyles.mapContainer
		}>
			<MapboxGL.MapView
				style={{ flex: 1 }}
				styleURL='mapbox://styles/mapbox/streets-v12'
				onPress={() => setShowName(false)}
				userTrackingMode={MapboxGL.UserTrackingMode.Follow}
			>
				{
					userInPolygon && location.length !== 0 ?
						<MapboxGL.Camera
							zoomLevel={13}
							centerCoordinate={location}
							animationMode='none'
							followUserMode='compass'
							followUserLocation
						/>
						: <MapboxGL.Camera
							zoomLevel={13}
							centerCoordinate={centerCo}
							animationMode='none'
						/>
				}
				{
					location.length !== 0 &&
					<MapboxGL.PointAnnotation
						id='userMarker'
						coordinate={location}
					>
						<IconMarker prevPage='Detail' />

					</MapboxGL.PointAnnotation>
				}
				{
					pointsGeo !== null ? (
						<MapboxGL.ShapeSource
							id="markers"
							shape={pointsGeo}
							onPress={(e) => {
								setShowName(true);
								setNamePoint(e.features[ 0 ].properties?.point.name);
								setDataPoint(e.features[ 0 ].properties?.point);
							}}>
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
			<View
				style={[
					DetailMapStyles.scaleMap,
					DefaultShadow.bottomShadow,
					{
						backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light
					}
				]}
			>
				{
					props?.scaleBig === true ? (
						<FontAwsome5
							name='compress-arrows-alt'
							size={25}
							color={nameMode === 'dark' ? TextColor.lightText : TextColor.darkText}
							onPress={() => props?.handleScaleBigMap(false)}
						/>
					) : (
						<FontAwsome5
							name='expand-arrows-alt'
							size={25}
							color={nameMode === 'dark' ? TextColor.lightText : TextColor.darkText}
							onPress={() => props?.handleScaleBigMap(true)}
						/>
					)
				}
			</View>
			{
				showName === true ? (
					<View
						style={[
							DetailMapStyles.nameModalContainer,
							DefaultShadow.bottomShadow,
							{
								backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light
							}
						]}
					>
						<Text
							style={[
								DetailMapStyles.nameModalText,
								{
									color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText
								}
							]}
						>{namePoint}</Text>
						<TouchableOpacity
							style={[
								DescriptionStyles.buttonMoreInfo,
								{ borderColor: nameMode === 'dark' ? TextColor.grayText : TextColor.darkText }
							]}
							onPress={() => props?.navigation.navigate('DetailPointPage', {
								titleScreen: namePoint,
								dataOfCard: dataPoint,
								nameMode,
							})}
						>
							<Text
								style={[
									DescriptionStyles.textButton,
									{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
								]}
							>{props?.translation.t('mapbox_button_more_info')}</Text>
						</TouchableOpacity>
					</View>
				) : null
			}
		</View>
	);
};
