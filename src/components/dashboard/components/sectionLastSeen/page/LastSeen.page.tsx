import React, { FC, useEffect, useState } from 'react';

import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { LastStyles } from './LastSeen.styles';
import { RecommendedStyles } from '../../sectionRecRoutes/page/RecommendedSection.styles';
import { LastSeenType } from '../types/LastSeen.types';
import * as RootNavigation from '@/lib/rootNavigator/RootNavigator';
import { TextColor } from '@/style';
import { getSpecRoute } from '@/utils/redux/Actions';

export const LastSeenSection: FC <LastSeenType> = ({ translation, mode }) => {

	const dispatch = useDispatch();

	const [ noRecent, setNoRecent ] = useState<boolean>(false);
	const { lastSeen, nameMode, specRoute } = useSelector((state: any) => state.allReducer);

	const getSpecRouteFromId = () => {
		dispatch(getSpecRoute(lastSeen));
	};

	useEffect(() => {
		getSpecRouteFromId();
	}, []);

	return(
		<View style={LastStyles.container}>
			<Text style={[ LastStyles.title, { color: mode === 'dark' ? TextColor.lightText : TextColor.darkText } ]} >{translation.t('dashboard_section_last_seen_title')}</Text>
			<ScrollView horizontal style={RecommendedStyles.allDataContainer}>
				{/* {
					noRecent ? <Text style={{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }}>No recent were found</Text> :
						data.map((recommendedRoute: any) => {
							return(
								<TouchableOpacity key={recommendedRoute._id} style={RecommendedStyles.dataContainer} onPress={() => RootNavigation.navigate('DetailPage', { dataOfCard: recommendedRoute })}>
									<Image source={{ uri: recommendedRoute.imageUrl }} style={RecommendedStyles.imageRoute} resizeMode='cover' />
									<Text
										style={[ RecommendedStyles.nameRoute, { color: mode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}
									>
										{recommendedRoute.name}
										<Text style={RecommendedStyles.infoRoute}> - {recommendedRoute.theme}</Text>
									</Text>
								</TouchableOpacity>
							);
						})
				} */}
				{
					specRoute.map((last: any) => {
						return(
							<TouchableOpacity key={last._id} style={RecommendedStyles.dataContainer} onPress={() => RootNavigation.navigate('DetailPage', { dataOfCard: last })}>
								<Image source={{ uri: last.imageUrl }} style={RecommendedStyles.imageRoute} resizeMode='cover' />
								<Text
									style={[ RecommendedStyles.nameRoute, { color: mode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}
								>
									{last.name}
									<Text style={RecommendedStyles.infoRoute}> - {last.theme}</Text>
								</Text>
							</TouchableOpacity>
						);
					})
				}
			</ScrollView>
		</View>
	);
};
