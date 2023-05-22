import React, { FC, useEffect, useState } from 'react';

import MapboxGL, { CircleLayerStyle, SymbolLayerStyle, OnPressEvent } from '@rnmapbox/maps';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { PointMapStyles } from './PointMapView.styles';
import { DescriptionModalMarker } from '../mapView/components';
import { DetailMapStyles } from '../shared';
import { MapboxAccesToken } from '@/config';
import { getPoints } from '@/utils/redux/Actions';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const PointMapView: FC = () => {

	const coordinates = [ 4.3570964, 50.845504 ];
	const [ pointGeo, setPointGeo ] = useState();
	const [ showModal, setShowModal ] = useState<boolean>(false);
	const [ detailPoint, setDetailPoint ] = useState<any>();

	const dispatch = useDispatch();
	const { points } = useSelector((state: any) => state.allReducer);

	const mapPoints = () => {
		if (points?.length > 0) {
			setPointGeo({
				type: 'FeatureCollection',
				features: points.map((point, index) => ({
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

	useEffect(() => {
		fetchPoints();
	}, []);

	return (
		<>
			<MapboxGL.MapView style={PointMapStyles.container}>
				<MapboxGL.Camera zoomLevel={13} centerCoordinate={coordinates} animationMode='none' />
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
			</MapboxGL.MapView>
			{
				showModal ?
					<View style={PointMapStyles.modalContainer}>
						<DescriptionModalMarker
							titlePoint={detailPoint.name}
							imagePoint={detailPoint.imageUrl}
							navigation={undefined}
							data={detailPoint}
						/>
					</View>
					: null
			}
		</>
	);
};
