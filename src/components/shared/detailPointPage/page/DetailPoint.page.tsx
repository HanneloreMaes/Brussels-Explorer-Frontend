import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Image, ScrollView, Text, View } from 'react-native';

import { DetailPointTypes } from '../types/DetailPoint.types';
import { DetailPointStyles } from './Detailpoint.styles';
import '@/utils/i18n/i18n';

export const DetailPointPage: FC <DetailPointTypes> = ({ route }) => {

	// const { dataOfCard } = route.params;
	const { i18n } = useTranslation();

	return (
		<ScrollView style={DetailPointStyles.detailContainer}>
			<View style={DetailPointStyles.dataContainer}>
				<Text>Hellow Point</Text>
				{/* <Image source={{ uri: dataOfCard.imageUrl }} style={DetailPointStyles.imageDetail} resizeMode='cover' />
				<View style={[ DetailPointStyles.headerContainer, { marginTop: 20 } ]}>
					<View style={DetailPointStyles.borderTextContainer}>
						<Text style={DetailPointStyles.borderText}> {i18n.t('detail_button_see_map')} </Text>
					</View>
				</View>
				<Text style={DetailPointStyles.titleDetail}>{dataOfCard.name}</Text>
				<Text style={DetailPointStyles.addressDetail}>{dataOfCard.address}</Text>
				<Text style={DetailPointStyles.addressDetail}>{dataOfCard.type}</Text> */}
			</View>
		</ScrollView>
	);
};
