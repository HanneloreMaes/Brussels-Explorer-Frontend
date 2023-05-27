import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { DescriptionStyles } from './DescriptionModal.styles';
import { DescriptionTypes } from '../types/DescriptionModal.types';

import '@/utils/i18n/i18n';

export const DescriptionModalMarker: FC <DescriptionTypes> = ({
	titlePoint,
	imagePoint,
	area,
	prevPage,
	navigation,
	data
}) => {

	const { i18n } = useTranslation();
	const { nameMode } = useSelector( (state: any) => state.allReducer );

	const [ navigationName, setNavigationName ] = useState<string>('');

	useEffect(() => {
		if (prevPage === 'PointMapView') {
			return setNavigationName('DetailPointPage');
		};
		return setNavigationName('DetailPage');
	}, []);

	return (
		<View style={DescriptionStyles.container}>
			<Image
				source={{ uri: imagePoint }}
				style={DescriptionStyles.imageContainer}
			/>
			<View style={DescriptionStyles.infoContainer}>
				<Text style={DescriptionStyles.titleText}>{titlePoint}</Text>
				<Text style={DescriptionStyles.addressText}>{area}</Text>
				<TouchableOpacity
					style={DescriptionStyles.buttonMoreInfo}
					onPress={() => navigation.navigate(navigationName, {
						titleScreen: titlePoint,
						dataOfCard: data,
						nameMode,
					})}
				>
					<Text style={DescriptionStyles.textButton}>{i18n.t('mapbox_button_more_info')}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

};
