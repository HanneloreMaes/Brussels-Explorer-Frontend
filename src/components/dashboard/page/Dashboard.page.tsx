import React, { FC, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DashboardStyles } from './Dashboard.styles';
import { Header, RecommendedRoutes, RecentlyViewedSection } from '../components';
import { LoadingSpinner } from '@/components/shared';
import { Highlight } from '@/style';
import { getRoutes } from '@/utils/redux/Actions';
import '@/utils/i18n/i18n';

export const DashboardScreen: FC = () => {

	const { i18n } = useTranslation();
	const dispatch = useDispatch();
	const { routes } = useSelector( (state: any) => state.allReducer );

	const fetchRoutes = () => {
		dispatch(getRoutes());
	};

	useEffect(() => {
		fetchRoutes();
	}, []);

	return(
		<ScrollView style={DashboardStyles.scrollContainer}>
			<Header />
			{
				routes.length === 0 ? (
					<View style={DashboardStyles.loadingContainer}>
						<LoadingSpinner sizeSpinner='large' colorSpinner={Highlight.tealHighlight} />
					</View>
				) : (
					<View style={DashboardStyles.marginContainer}>
						<RecommendedRoutes data={routes} translation={i18n} />
						<RecentlyViewedSection data={routes} translation={i18n}/>
					</View>
				)
			}
		</ScrollView>
	);
};
