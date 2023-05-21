import React, { FC, useEffect, useState } from 'react';

import MapboxGL, { CircleLayerStyle, SymbolLayerStyle } from '@rnmapbox/maps';
import { useDispatch, useSelector } from 'react-redux';

import { DetailMapStyles } from '../shared';
import { MapboxAccesToken } from '@/config';
import { getPoints } from '@/utils/redux/Actions';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapboxAccesToken);

export const PointMapView: FC = () => {

	const coordinates = [ 4.3570964, 50.845504 ];
	const [ pointGeo, setPointGeo ] = useState();

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

	useEffect(() => {
		fetchPoints();
	}, []);

	return (
		<MapboxGL.MapView style={{ flex: 1 }}>
			<MapboxGL.Camera zoomLevel={13} centerCoordinate={coordinates} animationMode='none' />
			<MapboxGL.ShapeSource id="markers" shape={pointGeo}>
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
