import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DashboardStyles } from './Dashboard.styles';
import { Header, PopularRoutes } from '../components';
import { LoadingSpinner } from '@/components/shared';
import { Highlight } from '@/style';
import { getRoutes } from '@/utils/redux/Actions';
import '@/utils/i18n/i18n';

export const DashboardScreen: FC = () => {

	const [ isLoading, setIsLoading ] = useState(true);
	const { i18n } = useTranslation();
	const dispatch = useDispatch();
	const { routes } = useSelector( (state: any) => state.allReducer );

	const fetchRoutes = () => {
		dispatch(getRoutes());
		setIsLoading(false);
	};

	useEffect(() => {
		fetchRoutes();
		console.log('Routes', routes);
	}, []);

	return(
		<ScrollView style={DashboardStyles.scrollContainer}>
			<Header />
			{ isLoading ? (
				<View style={DashboardStyles.loadingContainer}>
					<LoadingSpinner sizeSpinner='large' colorSpinner={Highlight.tealHighlight} />
				</View>
			) : (
				<View style={DashboardStyles.marginContainer}>
					<PopularRoutes data={routes.routes} translation={i18n} />
				</View>
			) }
		</ScrollView>
	);
};
