import React, { FC, useEffect } from 'react';

import { Image, ScrollView, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';

import { DetailStyles } from './Detail.styles';
import { DetailMap } from '../components/DetailMap';
import { DetailTypes } from '../types/Detail.types';
import { ItemOverviewStyles } from '@/components/searchPage/components/itemOverview/ItemOverview.styles';
import { Highlight, TextColor, TextStyles } from '@/style';
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
					<View style={ItemOverviewStyles.infoTextContainer}>
						<Icon name='arrows-h' color={Highlight.tealHighlight} size={16} />
						<Text
							style={[
								DetailStyles.borderText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>{dataOfCard.distance}</Text>
					</View>
					<View style={ItemOverviewStyles.infoTextContainer}>
						<Feather name='clock' color={Highlight.tealHighlight} size={16} />
						<Text
							style={[
								DetailStyles.borderText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>{dataOfCard.time}</Text>
					</View>
					<View style={ItemOverviewStyles.infoTextContainer}>
						<Feather name='map-pin' color={Highlight.tealHighlight} size={16} />
						<Text
							style={[
								DetailStyles.borderText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>{dataOfCard.area}</Text>
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
				<View style={ItemOverviewStyles.infoTextContainer}>
					<Icon name='tag' color={Highlight.tealHighlight} size={20} />
					<Text
						style={[
							DetailStyles.themeTitle,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}>{dataOfCard.theme}</Text>
				</View>
				{/* <Text style={[ DetailStyles.themeTitle, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{dataOfCard.theme}</Text> */}
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
