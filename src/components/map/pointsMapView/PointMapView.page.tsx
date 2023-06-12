import React, { FC, useEffect, useState } from 'react';

import MapboxGL, { CircleLayerStyle, SymbolLayerStyle, OnPressEvent } from '@rnmapbox/maps';
import * as geolib from 'geolib';
import { View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request } from 'react-native-permissions';
import { useDispatch, useSelector } from 'react-redux';

import { PointMapStyles } from './PointMapView.styles';
import { IconMarker } from '../components/userLocationIcon/UserLocationIcon.page';
import { DescriptionModalMarker } from '../mapView/components';
import { DetailMapStyles, FirebaseModal, ModalError } from '@/components/shared';
import { centerBrussels, coordinatesBrussels } from '@/config';
import { AllMapNavProps } from '@/lib/navigator/types';
import { BackgroundColor } from '@/style';
import { getPoints } from '@/utils/redux/Actions';

export const PointMapView: FC<AllMapNavProps<'Points'>> = ({ navigation, route }) => {

	const [ pointGeo, setPointGeo ] = useState<any>();
	const [ showModal, setShowModal ] = useState<boolean>(false);
	const [ showModalError, setShowModalError ] = useState<boolean>(false);
	const [ detailPoint, setDetailPoint ] = useState<any>();

	const [ userInPolygon, setUserInPolygon ] = useState<boolean>(false);
	const [ locationPermissionAllowed, setLocationPermissionAllowed ] = useState<boolean>(false);
	const [ location, setLocation ] = useState<any>([]);

	const [ showModalFirebase, setShowModalFirebase ] = useState<boolean>(false);

	const dispatch = useDispatch();
	const { points, nameMode } = useSelector((state: any) => state.allReducer);

	const mapPoints = () => {
		if (points?.length > 0) {
			setShowModalError(false);
			setPointGeo({
				type: 'FeatureCollection',
				features: points.map((point: any, index: number) => ({
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
			setPointGeo(null);
			setShowModalError(true);
		}
	};

	const fetchPoints = () => {
		dispatch(getPoints());
		mapPoints();
	};

	const handleModalPress = (e: OnPressEvent) => {
		const pointData = e?.features?.[ 0 ]?.properties?.point;
		setShowModal(true);
		setDetailPoint(pointData);
	};

	const handleCloseModal = (value: boolean) => {
		setShowModalFirebase(value);
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
		fetchPoints();
		getCurrentLocation();
	}, [ navigation ]);

	useEffect(() => {
		onHandleSetCurrentLocation();
	}, [ route.name ]);

	return (
		<>
			<MapboxGL.MapView
				style={PointMapStyles.container}
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
						<IconMarker prevPage='Map' />

					</MapboxGL.PointAnnotation>
				}
				{
					pointGeo !== null ? (
						<MapboxGL.ShapeSource id="markers" shape={pointGeo} onPress={handleModalPress}>
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
							PointMapStyles.modalContainer,
							{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light }
						]}
					>
						<DescriptionModalMarker
							titlePoint={detailPoint.name}
							imagePoint={detailPoint.imageUrl}
							area={detailPoint.area}
							prevPage='PointMapView'
							navigation={navigation}
							data={detailPoint}
						/>
					</View>
					: null
			}
			{
				showModalError ? <ModalError labelName="mapbox_error_no_points" labelTryAgainText='mapbox_error_try_again' /> : null
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
