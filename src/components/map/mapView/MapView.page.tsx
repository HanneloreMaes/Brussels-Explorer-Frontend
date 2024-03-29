/* eslint-disable no-console */
import React, { FC, useEffect, useRef, useState } from 'react';

import MapboxGL, { CircleLayerStyle, SymbolLayerStyle, OnPressEvent } from '@rnmapbox/maps';
import * as geolib from 'geolib';
import { View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request } from 'react-native-permissions';
import { useDispatch, useSelector } from 'react-redux';

import { DescriptionModalMarker } from './components';
import { MapStyles } from './MapView.styles';
import { IconMarker } from '../components/userLocationIcon/UserLocationIcon.page';
import { DetailMapStyles, FirebaseModal, ModalError } from '@/components/shared';
import { centerBrussels, coordinatesBrussels, MapboxAccesToken } from '@/config';
import { AllMapNavProps } from '@/lib/navigator/types';
import { BackgroundColor } from '@/style';
import { getPoints, getPointsFromSpecRoutes } from '@/utils/redux/Actions';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const MapView: FC <AllMapNavProps<'Routes'>> = ({ navigation, route }) => {

	const [ firstPointRouteGeo, setFirstPointRouteGeo ] = useState<any>();
	const [ showModal, setShowModal ] = useState<boolean>(false);
	const [ showModalError, setShowModalError ] = useState<boolean>(false);
	const [ detailPointRoute, setDetailPointRoute ] = useState<any>();

	const [ userInPolygon, setUserInPolygon ] = useState<boolean>(false);
	const [ locationPermissionAllowed, setLocationPermissionAllowed ] = useState<boolean>(false);
	const [ location, setLocation ] = useState<any>([]);

	const [ showModalFirebase, setShowModalFirebase ] = useState<boolean>(false);

	const handleCloseModal = (value: boolean) => {
		setShowModalFirebase(value);
	};

	const dispatch = useDispatch();
	const { routes, nameMode } = useSelector((state: any) => state.allReducer);

	const mapRoutes = () => {
		routes.map((routeDetail: any) => {
			return fetchSpecRoute(routeDetail._id);
		});
		if (routes?.length > 0) {
			setShowModalError(false);
			setFirstPointRouteGeo({
				type: 'FeatureCollection',
				features: routes.map((route: any, index: number) => ({
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
			setShowModalError(true);
		}
	};
	const fetchSpecRoute = (idRoute: string) => {
		dispatch(getPointsFromSpecRoutes(idRoute));
		dispatch(getPoints());
	};

	const handleModalPress = (e: OnPressEvent) => {
		const routeData = e?.features?.[ 0 ]?.properties?.route;
		setShowModal(true);
		setDetailPointRoute(routeData);
	};

	const getCurrentLocation = () => {

		Geolocation.watchPosition(
			position => {
				const { latitude, longitude } = position.coords;
				setLocation([
					longitude,
					latitude,
				]);
				const userLocation = { longitude, latitude };

				if ( geolib.isPointInPolygon(userLocation, coordinatesBrussels) === true ) {
					return setUserInPolygon(true);
				}
				return setUserInPolygon(false);
			},
			error => {
				console.warn('Error MapView watchPosition', error);
				setShowModalFirebase(true);
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
					setShowModalFirebase(true);
				});
		}
	};

	useEffect(() => {
		mapRoutes();
		onHandleSetCurrentLocation();
	}, []);

	return (
		<>
			<MapboxGL.MapView
				style={MapStyles.container}
				styleURL='mapbox://styles/mapbox/streets-v12'
				onPress={() => setShowModal(false)}
			>
				{
					userInPolygon && location.length !== 0 ?
						<MapboxGL.Camera
							zoomLevel={13}
							centerCoordinate={location}
							animationMode='none'
						/>
						: <MapboxGL.Camera
							zoomLevel={13}
							centerCoordinate={centerBrussels}
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
					firstPointRouteGeo !== null ? (
						<MapboxGL.ShapeSource id="markers" shape={firstPointRouteGeo} onPress={handleModalPress}>
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
			</MapboxGL.MapView>
			{
				showModal ?
					<View
						style={[
							MapStyles.modalContainer,
							{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light }
						]}
					>
						<DescriptionModalMarker
							titlePoint={detailPointRoute.name}
							imagePoint={detailPointRoute.imageUrl}
							area={detailPointRoute.area}
							prevPage='RouteMapView'
							navigation={navigation}
							data={detailPointRoute}
						/>
					</View>
					: null
			}
			{
				showModalError ? <ModalError labelName="mapbox_error_no_routes" labelTryAgainText='mapbox_error_try_again' /> : null
			}
			{
				showModalFirebase === true ? (
					<FirebaseModal
						labelName='firebase_error'
						handleCloseModal={handleCloseModal}
						nameMode={nameMode}
					/>
				) : null
			}
		</>
	);
};
