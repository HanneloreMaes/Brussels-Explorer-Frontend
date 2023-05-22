import React, { FC } from 'react';

import { Image, ScrollView, Text, View } from 'react-native';

import { DetailStyles } from '../..';
import { DetailPointTypes } from '../types/DetailPoint.types';
import { TextColor } from '@/style';

export const DetailPointPage: FC <DetailPointTypes> = ({ route }) => {

	const { dataOfCard, nameMode } = route.params;

	return (
		<ScrollView style={DetailStyles.detailContainer}>
			<View style={DetailStyles.dataContainer}>
				<Image source={{ uri: dataOfCard.imageUrl }} style={DetailStyles.imageDetail} resizeMode='cover' />
				<Text
					style={[
						DetailStyles.titleDetail,
						{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
					]}
				>
					{dataOfCard.name}
				</Text>
				<Text
					style={[
						DetailStyles.textDetail,
						DetailStyles.typePoint,
					]}
				>
					{dataOfCard.type}
				</Text>
				<Text
					style={[
						DetailStyles.textDetail,
						{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
					]}
				>
					{dataOfCard.address}
				</Text>
			</View>
		</ScrollView>
	);
};
