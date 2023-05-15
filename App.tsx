/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import '@/utils/i18n/i18n';

const App = () => {
	const { i18n } = useTranslation();

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return(
		<Text>{i18n.t('routes_label_searchPage')}</Text>
	);
};

export default App;
