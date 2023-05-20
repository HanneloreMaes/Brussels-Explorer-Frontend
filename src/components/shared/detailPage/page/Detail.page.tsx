import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Image, ScrollView, Text, View } from 'react-native';

import { DetailStyles } from './Detail.styles';
import { DetailMap } from '../components/DetailMap';
import { DetailTypes } from '../types/Detail.types';
import '@/utils/i18n/i18n';
import { TextColor } from '@/style';

export const DetailPage: FC <DetailTypes> = ({ route }) => {

	const { dataOfCard, nameMode } = route.params;
	const { i18n } = useTranslation();

	return (
		<ScrollView style={DetailStyles.detailContainer}>
			<View style={DetailStyles.dataContainer}>
				<View style={DetailStyles.headerContainer}>
					<View
						style={[
							DetailStyles.borderTextContainer,
							{ borderColor: nameMode === 'dark' ? TextColor.grayText : TextColor.darkText }
						]}
					>
						<Text
							style={[
								DetailStyles.borderText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>
							{dataOfCard.distance}
						</Text>
					</View>
					<View
						style={[
							DetailStyles.borderTextContainer,
							{ borderColor: nameMode === 'dark' ? TextColor.grayText : TextColor.darkText }
						]}
					>
						<Text
							style={[
								DetailStyles.borderText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>
							{dataOfCard.time}
						</Text>
					</View>
					<View
						style={[
							DetailStyles.borderTextContainer,
							{ borderColor: nameMode === 'dark' ? TextColor.grayText : TextColor.darkText }
						]}
					>
						<Text
							style={[
								DetailStyles.borderText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>
							{i18n.t('dashboard_detail_page_address')}
						</Text>
					</View>
				</View>
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
						{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
					]}
				>
					{dataOfCard.description}
				</Text>
				<DetailMap dataRoute={dataOfCard}/>
			</View>
		</ScrollView>
	);
};
