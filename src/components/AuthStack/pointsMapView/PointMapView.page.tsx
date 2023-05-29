import React, { FC, useEffect, useState } from 'react';

import MapboxGL, { CircleLayerStyle, SymbolLayerStyle, OnPressEvent } from '@rnmapbox/maps';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { PointMapStyles } from './PointMapView.styles';
import { DescriptionModalMarker } from '../mapView/components';
import { DetailMapStyles, ModalError } from '@/components/shared';
import { AllMapNavProps } from '@/lib/navigator/types';
import { BackgroundColor } from '@/style';
import { getPoints } from '@/utils/redux/Actions';

export const PointMapView: FC<AllMapNavProps<'Points'>> = ({ navigation }) => {

	const coordinates = [ 4.3570964, 50.845504 ];
	const [ pointGeo, setPointGeo ] = useState();
	const [ showModal, setShowModal ] = useState<boolean>(false);
	const [ showModalError, setShowModalError ] = useState<boolean>(false);
	const [ detailPoint, setDetailPoint ] = useState<any>();

	const dispatch = useDispatch();
	const { points, nameMode } = useSelector((state: any) => state.allReducer);

	const mapPoints = () => {
		if (points?.length > 0) {
			setShowModalError(false);
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

	useEffect(() => {
		fetchPoints();
	}, [ navigation ]);

	return (
		<>
			<MapboxGL.MapView
				style={PointMapStyles.container}
				styleURL='mapbox://styles/mapbox/streets-v12'
				onPress={() => setShowModal(false)}
			>
				<MapboxGL.Camera zoomLevel={13} centerCoordinate={coordinates} animationMode='none' />
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
		</>
	);
};
