import React, { FC } from 'react';

import { Text, View, Image, ScrollView } from 'react-native';

import { GenrePointsType } from '../types/GenrePoints.types';
import { GenreStyles } from './GenrePointsSection.styles';
import { TextStyles } from '@/style';

export const GenrePointsSection: FC <GenrePointsType> = ({ translation }) => {
	return(
		<View style={GenreStyles.container}>
			<Text style={[ TextStyles.titleH2, GenreStyles.title ]} >{translation.t('dashboard_section_genre_title')}</Text>
			<ScrollView horizontal>
				<View style={GenreStyles.test} >
					<Image source={require('../../../../../assets/images/genres/streetArt.jpg')} style={GenreStyles.image} resizeMode='cover' />
					<Text>{translation.t('dashboard_section_genre_streetArt')}</Text>
				</View>
				<View style={GenreStyles.test}>
					<Image source={require('../../../../../assets/images/genres/bar_food.jpg')} style={GenreStyles.image} resizeMode='cover' />
					<Text>{translation.t('dashboard_section_genre_barFood')}</Text>
				</View>
				<View style={GenreStyles.test}>
					<Image source={require('../../../../../assets/images/genres/monument.jpg')} style={GenreStyles.image} resizeMode='cover' />
					<Text>{translation.t('dashboard_section_genre_monument')}</Text>
				</View>
				<View style={GenreStyles.test}>
					<Image source={require('../../../../../assets/images/genres/musea.jpg')} style={GenreStyles.image} resizeMode='cover' />
					<Text>{translation.t('dashboard_section_genre_musea')}</Text>
				</View>
			</ScrollView>
		</View>
	);
};
