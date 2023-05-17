import React, { FC } from 'react';

import { Text, View, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';

import { RecentlyStyles } from './RecentlySection.styles';
import { RecommendedStyles } from '../../sectionRecRoutes/page/RecommendedSection.styles';
import { RecentViewedType } from '../types/RecentViewed.types';
import * as RootNavigation from '@/lib/rootNavigator/RootNavigator';

export const RecentlyViewedSection: FC <RecentViewedType> = ({ data, translation }) => {
	return(
		<View style={RecentlyStyles.container}>
			<Text style={RecentlyStyles.title} >{translation.t('dashboard_section_recently_viewed_title')}</Text>
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
