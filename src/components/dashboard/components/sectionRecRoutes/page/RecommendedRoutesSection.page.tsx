import React, { FC, useState, useEffect } from 'react';

import { View, Image, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RecommendedStyles } from './RecommendedSection.styles';
import { RecommendedType } from '../types/Recommended.types';
import { TitleH2 } from '@/components/shared';
import { ButtonStyles, TextColor } from '@/style';
import { getRoutes } from '@/utils/redux/Actions';

export const RecommendedRoutes: FC <RecommendedType> = ({
	unAuth,
	data,
	mode,
	translation,
	navigation
}) => {

	const slicedData = data.slice(0, 2);

	const dispatch = useDispatch();

	const [ theme, setTheme ] = useState<string>('');
	const [ distance, setDistance ] = useState<string>('');

	const [ filteredData, setFilteredData ] = useState<any>([]);
	const [ checkData, setCheckData ] = useState<any>([]);

	const { preferences, routes } = useSelector((state: any) => state.allReducer);

	const getValuesFromPreferences = () => {
		setTheme(preferences[ 0 ]);
		setDistance(preferences[ 1 ]);
	};

	const filterData = () => {
		if (preferences.length !== 0) {
			setFilteredData(
				routes.filter((route:any) => {
					return (
						(!theme || theme === route.theme) &&
						(!distance || distance === route.distance)
					);
				})
			);
		}
	};

	const checkValidateData = () => {
		if (filteredData.length === 0 ) {
			setCheckData(routes);
		} else (
			setCheckData(filteredData)
		);
	};

	useEffect(() => {
		dispatch(getRoutes());
		getValuesFromPreferences();
	}, []);

	useEffect(() => {
		getValuesFromPreferences();
		filterData();
		checkValidateData();
	}, [ theme, distance ]);

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
						checkData.map((recommendedRoute: any) => {
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
