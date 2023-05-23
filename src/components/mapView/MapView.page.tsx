import React, { FC, useEffect, useState } from 'react';

import MapboxGL, { CircleLayerStyle, SymbolLayerStyle, OnPressEvent } from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DescriptionModalMarker } from './components';
import { MapStyles } from './MapView.styles';
import { DetailMapStyles } from '../shared/detailPage/components/DetailMap.styles';
import { MapboxAccesToken } from '@/config';
import { AllMapNavProps } from '@/lib/navigator/types';
import { getPointsFromSpecRoutes } from '@/utils/redux/Actions';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const MapView: FC <AllMapNavProps<'Routes'>> = ({ navigation }) => {

	const coordinates = [ 4.3570964, 50.845504 ];
	const [ firstPointRouteGeo, setFirstPointRouteGeo ] = useState();
	const [ showModal, setShowModal ] = useState<boolean>(false);
	const [ detailPointRoute, setDetailPointRoute ] = useState<any>();

	const dispatch = useDispatch();
	const { routes } = useSelector((state: any) => state.allReducer);

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

	const handleModalPress = (e: OnPressEvent) => {
		const routeData = e?.features?.[ 0 ]?.properties?.route;
		setShowModal(true);
		setDetailPointRoute(routeData);
	};

	useEffect(() => {
		mapRoutes();
	}, []);

	return (
		<>
			<MapboxGL.MapView
				style={MapStyles.container}
				styleURL='mapbox://styles/mapbox/streets-v12'
			>
				<MapboxGL.Camera zoomLevel={13} centerCoordinate={coordinates} animationMode='none' />
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
			</MapboxGL.MapView>
			{
				showModal ?
					<View style={MapStyles.modalContainer}>
						<DescriptionModalMarker
							titlePoint={detailPointRoute.name}
							imagePoint={detailPointRoute.imageUrl}
							prevPage='RouteMapView'
							navigation={navigation}
							data={detailPointRoute}
						/>
					</View>
					: null
			}
		</>
	);
};
