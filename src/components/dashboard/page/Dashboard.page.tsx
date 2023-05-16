import React, { FC } from 'react';

import { ScrollView } from 'react-native';

import { DashboardStyles } from './Dashboard.styles';
import { Header } from '../components';

export const DashboardScreen: FC = () => {

	return(
		<ScrollView style={DashboardStyles.scrollContainer}>
			<Header />
		</ScrollView>
	);
};
