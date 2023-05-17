import React, { FC } from 'react';

import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

import { PopularStyles } from './RecommendedSection.styles';
import { PopularType } from '../types/Recommended.types';
import * as RootNavigation from '@/lib/rootNavigator/RootNavigator';
import { TextStyles } from '@/style';

export const PopularRoutes: FC <PopularType> = ({ data, translation }) => {
	console.log('Data', data);
	return(
		<View style={PopularStyles.container}>
			<Text style={[ TextStyles.titleH2, PopularStyles.title ]}>{translation.t('dashboard_section_popular_title')}</Text>
			<ScrollView horizontal style={PopularStyles.allDataContainer}>
				{
					data.map((popularRoute: any) => {
						return(
							<TouchableOpacity key={popularRoute._id} style={PopularStyles.dataContainer} onPress={() => RootNavigation.navigate('DetailPage', { dataOfCard: popularRoute })}>
								<Image source={{ uri: popularRoute.imageUrl }} style={PopularStyles.imageRoute} resizeMode='cover' />
								<Text style={PopularStyles.nameRoute}>{popularRoute.name}</Text>
								<Text style={PopularStyles.infoRoute}>
									{popularRoute.distance} - {popularRoute.time} - {translation.t('dashboard_section_genre_address')}
								</Text>
							</TouchableOpacity>
						);
					})
				}
			</ScrollView>
		</View>
	);
};
