import React, { FC, useState, useEffect } from 'react';

import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';

import { RecommendedStyles } from './RecommendedSection.styles';
import { RecommendedType } from '../types/Recommended.types';
import { TitleH2 } from '@/components/shared';
import { BackgroundColor, ButtonStyles, Highlight, TextColor } from '@/style';
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
		} else {
			const slicedFilteredData = filteredData.slice(0, 3);
			setCheckData(slicedFilteredData);
		};
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
			<ScrollView horizontal style={RecommendedStyles.scrollView}>
				{
					unAuth === true ? (

						slicedData.map((recommendedRoute: any) => {
							return(
								<View
									style={RecommendedStyles.allDataParentContainer}
								>
									<View
										style={[
											RecommendedStyles.allDataChildContainer,
											{
												backgroundColor: mode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
												shadowColor: mode === 'dark' ? Highlight.lightHighlight : Highlight.darkHighlight,
											}
										]}
									>
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
												<Text
													style={[
														RecommendedStyles.infoRoute,
														{
															color: mode === 'dark' ? TextColor.lightGrayText : TextColor.grayText,
														}
													]}
												>{recommendedRoute.theme}</Text>
											</View>
										</TouchableOpacity>
									</View>
								</View>
							);
						})
					) : (
						checkData.map((recommendedRoute: any) => {
							return(
								<View
									style={RecommendedStyles.allDataParentContainer}
								>
									<View
										style={[
											RecommendedStyles.allDataChildContainer,
											{
												backgroundColor: mode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
												shadowColor: mode === 'dark' ? Highlight.lightHighlight : Highlight.darkHighlight,
											}
										]}
									>
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
												<Text
													style={[
														RecommendedStyles.infoRoute,
														{
															color: mode === 'dark' ? TextColor.lightGrayText : TextColor.grayText,
														}
													]}
												>{recommendedRoute.theme}</Text>
											</View>
										</TouchableOpacity>
									</View>
								</View>
							);
						})
					)
				}
				<View
					style={RecommendedStyles.allDataParentContainer}
				>
					<View
						style={[
							RecommendedStyles.allDataChildContainer,
							{
								backgroundColor: mode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
								shadowColor: mode === 'dark' ? Highlight.lightHighlight : Highlight.darkHighlight,
							}
						]}
					>
						<TouchableOpacity
							style={RecommendedStyles.buttonSeeMore}
							onPress={() => navigation.navigate('Search')}
						>
							<Text
								style={[
									ButtonStyles.buttonTextPrimary,
									RecommendedStyles.buttonSeeMoreText
								]}
							>
								{translation.t('dashboard_section_recommended_button_title')}
							</Text>
							<Feather name='plus-circle' color={TextColor.lightText} size={30} />
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
