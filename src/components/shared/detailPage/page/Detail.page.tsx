import React, { FC, useEffect } from 'react';

import { Image, ScrollView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { DetailStyles } from './Detail.styles';
import { DetailMap } from '../components/DetailMap';
import { DetailTypes } from '../types/Detail.types';
import { TextColor, TextStyles } from '@/style';
import { getSpecRoute } from '@/utils/redux/Actions';

export const DetailPage: FC <DetailTypes> = ({ route }) => {

	const { dataOfCard, nameMode } = route.params;

	const dispatch = useDispatch();

	const fetchSpecRoute = () => {
		dispatch(getSpecRoute(dataOfCard._id));
	};

	useEffect(() => {
		fetchSpecRoute();
	}, [ dataOfCard ]);

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
							{dataOfCard.area}
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
				<Text style={[ DetailStyles.themeTitle, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{dataOfCard.theme}</Text>
				<Text
					style={[
						TextStyles.bodyText,
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
