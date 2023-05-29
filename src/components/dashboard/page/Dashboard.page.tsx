import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DashboardStyles } from './Dashboard.styles';
import { Header, RecommendedRoutes, LastSeenSection } from '../components';
import { LoadingSpinner } from '@/components/shared';
import { DashboardNavProps } from '@/lib/navigator/types';
import { Highlight } from '@/style';
import { getRoutes } from '@/utils/redux/Actions';
import '@/utils/i18n/i18n';

export const DashboardScreen: FC <DashboardNavProps<'DashboardScreen'>> = ({ navigation }) => {

	const { i18n } = useTranslation();
	const dispatch = useDispatch();
	const { routes, nameMode, unAuth } = useSelector((state: any) => state.allReducer );

	const [ data, setData ] = useState<any>();
	const [ unAuthData, setUnAuthData ] = useState<any>();

	const fetchRoutes = () => {
		dispatch(getRoutes());
		getRightData();
	};

	const getRightData = () => {
		if (unAuth === true) {
			const slicedData = routes.slice(0, 2);
			const slicedDataLast = routes.slice(0, 1);
			setData(slicedData);
			setUnAuthData(slicedDataLast);
		}
	};

	useEffect(() => {
		fetchRoutes();
	}, []);

	return(
		<ScrollView>
			<Header />
			{
				routes.length === 0 ? (
					<View style={DashboardStyles.loadingContainer}>
						<LoadingSpinner sizeSpinner='large' colorSpinner={Highlight.tealHighlight} />
					</View>
				) : (
					<View style={DashboardStyles.marginContainer}>
						<RecommendedRoutes
							data={unAuth === true ? data : routes}
							mode={nameMode}
							translation={i18n}
							navigation={navigation}
						/>
						<LastSeenSection dataUnAuth={unAuthData} mode={nameMode} />
					</View>
				)
			}
		</ScrollView>
	);
};
