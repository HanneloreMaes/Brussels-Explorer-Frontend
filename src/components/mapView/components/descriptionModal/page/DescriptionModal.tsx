import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { DescriptionStyles } from './DescriptionModal.styles';
import { DescriptionTypes } from '../types/DescriptionModal.types';

import '@/utils/i18n/i18n';

export const DescriptionModalMarker: FC <DescriptionTypes> = ({
	titlePoint,
	imagePoint,
	navigation,
	data
}) => {

	const { i18n } = useTranslation();

	return (
		<View style={DescriptionStyles.container}>
			<Image
				source={{ uri: imagePoint }}
				style={DescriptionStyles.imageContainer}
			/>
			<View style={DescriptionStyles.infoContainer}>
				<Text style={DescriptionStyles.titleText}>{titlePoint}</Text>
				<Text style={DescriptionStyles.addressText}>Brussels</Text>
				<TouchableOpacity
					style={DescriptionStyles.buttonMoreInfo}
					onPress={() => navigation.navigate('DetailPoint', { dataOfCard: data })}
				>
					<Text style={DescriptionStyles.textButton}>{i18n.t('mapbox_button_more_info')}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

};
