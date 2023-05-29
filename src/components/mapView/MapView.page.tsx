import React, { FC, useEffect, useState } from 'react';

import MapboxGL, { CircleLayerStyle, SymbolLayerStyle, OnPressEvent } from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DescriptionModalMarker } from './components';
import { MapStyles } from './MapView.styles';
import { DetailMapStyles, ModalError } from '@/components/shared';
import { MapboxAccesToken } from '@/config';
import { AllMapNavProps } from '@/lib/navigator/types';
import { BackgroundColor } from '@/style';
import { getPoints, getPointsFromSpecRoutes } from '@/utils/redux/Actions';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const MapView: FC <AllMapNavProps<'Routes'>> = ({ navigation }) => {

	const coordinates = [ 4.3570964, 50.845504 ];
	const [ firstPointRouteGeo, setFirstPointRouteGeo ] = useState();
	const [ showModal, setShowModal ] = useState<boolean>(false);
	const [ showModalError, setShowModalError ] = useState<boolean>(false);
	const [ detailPointRoute, setDetailPointRoute ] = useState<any>();

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

	useEffect(() => {
		mapRoutes();
	}, []);

	return (
		<>
			<MapboxGL.MapView
				style={MapStyles.container}
				styleURL='mapbox://styles/mapbox/streets-v12'
				onPress={() => setShowModal(false)}
			>
				<MapboxGL.Camera zoomLevel={13} centerCoordinate={coordinates} animationMode='none' />
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
		</>
	);
};
