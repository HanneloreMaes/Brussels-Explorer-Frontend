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

	const [ unAuthData, setUnAuthData ] = useState<any>();

	const getRightData = () => {
		if (unAuth === true) {
			const slicedDataLast = routes.slice(0, 1);
			setUnAuthData(slicedDataLast);
		}
	};

	useEffect(() => {
		dispatch(getRoutes());
		getRightData();
	}, []);

	return(
		<ScrollView>
			<Header />
			{
				routes.length === 0 ? (
					<View style={DashboardStyles.loadingContainer}>
						<LoadingSpinner sizeSpinner='large' />
					</View>
				) : (
					<View style={DashboardStyles.marginContainer}>
						<RecommendedRoutes
							unAuth={unAuth}
							data={routes}
							mode={nameMode}
							translation={i18n}
							navigation={navigation}
						/>
						<LastSeenSection
							dataUnAuth={unAuthData}
							navigation={navigation}
						/>
					</View>
				)
			}
		</ScrollView>
	);
};
