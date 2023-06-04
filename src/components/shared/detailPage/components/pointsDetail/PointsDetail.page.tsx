import React, { FC, useEffect } from 'react';

import { Text, ScrollView, Image, TouchableOpacity, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import { PointsTypes } from './PointsDetail.types';
import { ItemOverviewStyles } from '@/components/searchPage/components/itemOverview/ItemOverview.styles';
import { TextColor, Highlight } from '@/style';
import { getPointsFromSpecRoutes } from '@/utils/redux/Actions';

export const PointsDetail: FC <PointsTypes> = ({ props }) => {

	const dispatch = useDispatch();
	const { pointsForSpecRoute, nameMode } = useSelector((state: any) => state.allReducer);

	const getPointById = () => {
		dispatch(getPointsFromSpecRoutes(props._id));
	};

	useEffect(() => {
		getPointById();
	}, [ props ]);

	return (
		<View style={{ flex: 1 }}>
			<ScrollView nestedScrollEnabled>
				{
					pointsForSpecRoute.map((pointOfRoute: any) => {
						return(
							<View key={pointOfRoute._id}>
								<TouchableOpacity
									key={pointOfRoute._id}
									style={ ItemOverviewStyles.itemContainer }
								>
									<Image
										source={{ uri: pointOfRoute.imageUrl }}
										style={ItemOverviewStyles.image}
										resizeMode='cover' />
									<View style={{ marginLeft: 10 }}>
										<Text style={[ ItemOverviewStyles.textName, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{pointOfRoute.name}</Text>
										<View style={ItemOverviewStyles.infoTextContainer}>
											<Icon name='tag' color={Highlight.tealHighlight} size={16} />
											<Text style={[ ItemOverviewStyles.textInfo, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{pointOfRoute.type}</Text>
										</View>
									</View>
								</TouchableOpacity>
								<View style={ItemOverviewStyles.underline} />
							</View>
						);
					})
				}
			</ScrollView>
		</View>
	);
};
