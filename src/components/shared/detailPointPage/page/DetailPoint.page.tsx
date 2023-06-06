import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Image, ScrollView, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { DetailStyles } from '../..';
import { DetailPointTypes } from '../types/DetailPoint.types';
import { ItemOverviewStyles } from '@/components/searchPage/components/itemOverview/ItemOverview.styles';
import { DefaultMargins, Highlight, TextColor, TextStyles } from '@/style';
import '@/utils/i18n/i18n';

export const DetailPointPage: FC <DetailPointTypes> = ({ route }) => {

	const { i18n } = useTranslation();
	const { dataOfCard, nameMode } = route.params;

	const [ rightDescription, setRightDescription ] = useState<string>('');

	const checkLanguageDescription = () => {
		if (i18n.language === 'nl') {
			setRightDescription(dataOfCard.description_nl);
		}
		if (i18n.language === 'en') {
			setRightDescription(dataOfCard.description_en);
		}
		if (i18n.language === 'fr') {
			setRightDescription(dataOfCard.description_fr);
		}
		if (i18n.language === 'de') {
			setRightDescription(dataOfCard.description_de);
		}
	};

	const getRightIcons = () => {
		if (dataOfCard.type === 'StreetArt') {
			return (
				<View style={ItemOverviewStyles.infoTextContainer}>
					<Ionicons name='pencil' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							DetailStyles.borderText,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{dataOfCard.author}</Text>
				</View>
			);
		}
		if (dataOfCard.type === 'Musea') {
			return (
				<View style={ItemOverviewStyles.infoTextContainer}>
					<FontAwesome5 name='building' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							DetailStyles.borderText,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{dataOfCard.author}</Text>
				</View>
			);
		}
		if (dataOfCard.type === 'Monument') {
			return (
				<View style={ItemOverviewStyles.infoTextContainer}>
					<FontAwesome5 name='monument' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							DetailStyles.borderText,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{dataOfCard.author}</Text>
				</View>
			);
		}
		if (dataOfCard.type === 'Forest-Square-Park') {
			return (
				<View style={ItemOverviewStyles.infoTextContainer}>
					<FontAwesome name='tree' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							DetailStyles.borderText,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{dataOfCard.author}</Text>
				</View>
			);
		}
		if (dataOfCard.type === 'Other') {
			return (
				<View style={ItemOverviewStyles.infoTextContainer}>
					<Feather name='plus' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							DetailStyles.borderText,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{dataOfCard.author}</Text>
				</View>
			);
		}
		if (dataOfCard.type === 'Shops') {
			return (
				<View style={ItemOverviewStyles.infoTextContainer}>
					<FontAwesome5 name='shopping-basket' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							DetailStyles.borderText,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{dataOfCard.author}</Text>
				</View>
			);
		}
		if (dataOfCard.type === 'Bar-Food') {
			return (
				<View style={ItemOverviewStyles.infoTextContainer}>
					<FontAwesome name='cutlery' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							DetailStyles.borderText,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{dataOfCard.author}</Text>
				</View>
			);
		}
	};

	useEffect(() => {
		checkLanguageDescription();
	}, [ dataOfCard ]);

	return (
		<ScrollView style={DetailStyles.detailContainer}>
			<View style={DetailStyles.dataContainer}>
				<View style={DetailStyles.headerContainer}>
					{getRightIcons()}
				</View>
				<View style={DetailStyles.headerContainer}>
					<View style={ItemOverviewStyles.infoTextContainer}>
						<Feather name='map-pin' color={Highlight.tealHighlight} size={16} />
						<Text
							style={[
								DetailStyles.borderText,
								{
									color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
								}
							]}
						>{dataOfCard.address}</Text>
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
				<View style={DetailStyles.infoTextContainer}>
					<FontAwesome name='tag' color={Highlight.tealHighlight} size={20} />
					<Text
						style={[
							DetailStyles.themeTitle,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}>{dataOfCard.type}</Text>
				</View>
				<Text
					style={[
						TextStyles.bodyText,
						{
							color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
							marginBottom: DefaultMargins.bottomMargin,
						}
					]}
				>
					{rightDescription}
				</Text>
			</View>
		</ScrollView>
	);
};
