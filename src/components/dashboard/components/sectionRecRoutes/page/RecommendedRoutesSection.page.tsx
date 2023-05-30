import React, { FC, useEffect, useState } from 'react';

import { View, Image, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { useSelector } from 'react-redux';

import { RecommendedStyles } from './RecommendedSection.styles';
import { RecommendedType } from '../types/Recommended.types';
import { TitleH2 } from '@/components/shared';
import { ButtonStyles, TextColor } from '@/style';

export const RecommendedRoutes: FC <RecommendedType> = ({ unAuth, data, mode, translation, navigation }) => {

	const slicedData = data.slice(0, 2);

	return(
		<View style={RecommendedStyles.container}>
			<TitleH2 labelTitle='dashboard_section_recommended_title' prevComponent='Recommended' />
			<ScrollView horizontal style={RecommendedStyles.allDataContainer}>
				{
					unAuth === true ? (

						slicedData.map((recommendedRoute: any) => {
							return(
								<TouchableOpacity
									key={recommendedRoute._id}
									style={RecommendedStyles.dataContainer}
									onPress={() => navigation.navigate('DetailPage', {
										titleScreen: recommendedRoute.name,
										dataOfCard: recommendedRoute,
										nameMode: mode
									})}
								>
									<Image source={{ uri: recommendedRoute.imageUrl }} style={RecommendedStyles.imageRoute} resizeMode='cover' />
									<Text
										style={[
											RecommendedStyles.nameRoute,
											{ color: mode === 'dark' ? TextColor.lightText : TextColor.darkText }
										]}
									>
										{recommendedRoute.name}
									</Text>
									<View style={RecommendedStyles.bottomThemeContainer}>
										<Text style={RecommendedStyles.infoRoute}>{recommendedRoute.theme}</Text>
									</View>
								</TouchableOpacity>
							);
						})
					) : (
						data.map((recommendedRoute: any) => {
							return(
								<TouchableOpacity
									key={recommendedRoute._id}
									style={RecommendedStyles.dataContainer}
									onPress={() => navigation.navigate('DetailPage', {
										titleScreen: recommendedRoute.name,
										dataOfCard: recommendedRoute,
										nameMode: mode
									})}
								>
									<Image source={{ uri: recommendedRoute.imageUrl }} style={RecommendedStyles.imageRoute} resizeMode='cover' />
									<Text
										style={[
											RecommendedStyles.nameRoute,
											{ color: mode === 'dark' ? TextColor.lightText : TextColor.darkText }
										]}
									>
										{recommendedRoute.name}
									</Text>
									<View style={RecommendedStyles.bottomThemeContainer}>
										<Text style={RecommendedStyles.infoRoute}>{recommendedRoute.theme}</Text>
									</View>
								</TouchableOpacity>
							);
						})
					)
				}
			</ScrollView>
			<Pressable style={[ ButtonStyles.buttonContainerPrimary, RecommendedStyles.buttonSeeMore ]} onPress={() => navigation.navigate('Search')}>
				<Text
					style={[
						ButtonStyles.buttonTextPrimary,
						RecommendedStyles.buttonSeeMoreText
					]}
				>
					{translation.t('dashboard_section_recommended_button_title')}
				</Text>
			</Pressable>
		</View>
	);
};
