import React, { FC, useEffect, useState } from 'react';

import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { LastStyles } from './LastSeen.styles';
import { RecommendedStyles } from '../../sectionRecRoutes/page/RecommendedSection.styles';
import { LastSeenType } from '../types/LastSeen.types';
import { TitleH2 } from '@/components/shared';
import * as RootNavigation from '@/lib/rootNavigator/RootNavigator';
import { TextColor } from '@/style';

export const LastSeenSection: FC <LastSeenType> = ({ mode, dataUnAuth }) => {

	const { specRoute, nameMode } = useSelector((state: any) => state.allReducer);

	const [ noRecent, setNoRecent ] = useState<boolean>(false);

	const getSpecRouteFromId = () => {
		if (specRoute) {
			setNoRecent(false);
		} else {
			setNoRecent(true);
		}
	};

	useEffect(() => {
		getSpecRouteFromId();
	}, []);

	return(
		<View style={LastStyles.container}>
			<TitleH2 labelTitle='dashboard_section_last_seen_title' prevComponent='Last' />
			{
				noRecent ? <Text style={{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }}>No recent were found</Text> :
					(
						dataUnAuth === undefined ? (
							<ScrollView horizontal style={RecommendedStyles.allDataContainer}>
								<TouchableOpacity
									key={specRoute._id}
									style={RecommendedStyles.dataContainer}
									onPress={() => RootNavigation.navigate('DetailPage', { dataOfCard: specRoute })}
								>
									<Image source={{ uri: specRoute.imageUrl }} style={RecommendedStyles.imageRoute} resizeMode='cover' />
									<Text
										style={[
											RecommendedStyles.nameRoute,
											{ color: mode === 'dark' ? TextColor.lightText : TextColor.darkText }
										]}
									>
										{specRoute.name}
									</Text>
									<View style={RecommendedStyles.bottomThemeContainer}>
										<Text style={RecommendedStyles.infoRoute}>{specRoute.theme}</Text>
									</View>
								</TouchableOpacity>
							</ScrollView>
						) : (
							dataUnAuth.map((unAuth: any) => {
								return (
									<TouchableOpacity
										key={specRoute._id}
										style={RecommendedStyles.dataContainer}
										onPress={() => RootNavigation.navigate('DetailPage', { dataOfCard: unAuth })}
									>
										<Image source={{ uri: specRoute.imageUrl }} style={RecommendedStyles.imageRoute} resizeMode='cover' />
										<Text
											style={[
												RecommendedStyles.nameRoute,
												{ color: mode === 'dark' ? TextColor.lightText : TextColor.darkText }
											]}
										>
											{unAuth.name}
										</Text>
										<View style={RecommendedStyles.bottomThemeContainer}>
											<Text style={RecommendedStyles.infoRoute}>{unAuth.theme}</Text>
										</View>
									</TouchableOpacity>
								);
							})
						)
					)
			}
		</View>
	);
};
