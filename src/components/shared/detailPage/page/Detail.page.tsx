import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Image, ScrollView, Text, View } from 'react-native';

import { DetailStyles } from './Detail.styles';
import { DetailTypes } from '../types/Detail.types';
import '@/utils/i18n/i18n';

export const DetailPage: FC <DetailTypes> = ({ route }) => {

	const { dataOfCard } = route.params;
	const { i18n } = useTranslation();

	return (
		<ScrollView style={DetailStyles.detailContainer}>
			<View style={DetailStyles.dataContainer}>
				<View style={DetailStyles.headerContainer}>
					<View style={DetailStyles.borderTextContainer}>
						<Text style={DetailStyles.borderText}>{dataOfCard.distance}</Text>
					</View>
					<View style={DetailStyles.borderTextContainer}>
						<Text style={DetailStyles.borderText}>{dataOfCard.time}</Text>
					</View>
					<View style={DetailStyles.borderTextContainer}>
						<Text style={DetailStyles.borderText}> {i18n.t('dashboard_section_genre_address')} </Text>
					</View>
				</View>
				<Image source={{ uri: dataOfCard.imageUrl }} style={DetailStyles.imageDetail} resizeMode='cover' />
				<Text style={DetailStyles.titleDetail}>{dataOfCard.name}</Text>
				<Text style={DetailStyles.textDetail}>{dataOfCard.description}</Text>
			</View>
		</ScrollView>
	);
};
