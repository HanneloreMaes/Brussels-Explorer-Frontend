import React, { FC, useEffect } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, Text, View, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';

import { DetailStyles } from './Detail.styles';
import { DescriptionDetail } from '../components/descriptionDetail/DescriptionDetail.page';
import { PointsDetail } from '../components/pointsDetail/PointsDetail.page';
import { DetailTypes } from '../types/Detail.types';
import { ItemOverviewStyles } from '@/components/searchPage/components/itemOverview/ItemOverview.styles';
import { BackgroundColor, DefaultMargins, Highlight, TabBarColor, TextColor } from '@/style';
import { getSpecRoute } from '@/utils/redux/Actions';
import '@/utils/i18n/i18n';

const { height } = Dimensions.get('window');

const DetailSubStack = createMaterialTopTabNavigator();

export const DetailPage: FC <DetailTypes> = ({ route, navigation }) => {

	const { i18n } = useTranslation();
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
				<View style={DetailStyles.infoTextContainer}>
					<Icon name='tag' color={Highlight.tealHighlight} size={20} />
					<Text
						style={[
							DetailStyles.themeTitle,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}>{dataOfCard.theme}</Text>
				</View>
				<View style={{ height: height - 125, flex: 1, marginBottom: 10 }}>
					<DetailSubStack.Navigator
						screenOptions={{
							tabBarIndicatorStyle: {
								backgroundColor: nameMode === 'dark' ? TabBarColor.teal : Highlight.tealHighlight,
								height: 3
							},
							tabBarActiveTintColor: nameMode === 'dark' ? TabBarColor.teal : Highlight.tealHighlight,
							tabBarInactiveTintColor: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
							tabBarStyle: {
								backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
								marginBottom: DefaultMargins.topMargin,
							},
							tabBarLabelStyle: { fontSize: 16 },
						}}
					>
						<DetailSubStack.Screen
							name="DescriptionDetail"
							options={{ tabBarLabel: i18n.t('detail_page_title_description') as string }}
						>
							{() => <DescriptionDetail props={dataOfCard} translations={i18n} />}
						</DetailSubStack.Screen>
						<DetailSubStack.Screen
							name="PointsDetail"
							options={{ tabBarLabel: i18n.t('detail_page_title_point') as string }}
						>
							{() => <PointsDetail props={dataOfCard} navigation={navigation} />}
						</DetailSubStack.Screen>
					</DetailSubStack.Navigator>
				</View>
			</View>
		</ScrollView>
	);
};
