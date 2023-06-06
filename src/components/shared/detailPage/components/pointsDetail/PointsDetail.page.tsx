import React, { FC, useEffect } from 'react';

import { ScrollView, View, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { PointsTypes } from './PointsDetail.types';
import { ItemPointOverview } from '@/components/searchPage/components';
import { getPointsFromSpecRoutes } from '@/utils/redux/Actions';

export const PointsDetail: FC <PointsTypes> = ({ props, navigation }) => {

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
							<ItemPointOverview
								nameMode={nameMode}
								item={pointOfRoute}
								navigation={navigation}
							/>
						);
					})
				}
			</ScrollView>
		</View>
	);
};
