import React, { FC } from 'react';

import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

import { RecommendedStyles } from './RecommendedSection.styles';
import { RecommendedType } from '../types/Recommended.types';
import * as RootNavigation from '@/lib/rootNavigator/RootNavigator';

export const RecommendedRoutes: FC <RecommendedType> = ({ data, translation }) => {

	return(
		<View style={RecommendedStyles.container}>
			<Text style={RecommendedStyles.title}>{translation.t('dashboard_section_recommended_title')}</Text>
			<ScrollView horizontal style={RecommendedStyles.allDataContainer}>
				{
					data.map((recommendedRoute: any) => {
						return(
							<TouchableOpacity key={recommendedRoute._id} style={RecommendedStyles.dataContainer} onPress={() => RootNavigation.navigate('DetailPage', { dataOfCard: recommendedRoute })}>
								<Image source={{ uri: recommendedRoute.imageUrl }} style={RecommendedStyles.imageRoute} resizeMode='cover' />
								<Text
									style={RecommendedStyles.nameRoute}
								>
									{recommendedRoute.name}
									<Text style={RecommendedStyles.infoRoute}> - {recommendedRoute.theme}</Text>
								</Text>
							</TouchableOpacity>
						);
					})
				}
			</ScrollView>
		</View>
	);
};
