/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { View, StyleSheet, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { IS_ANDROID } from '@/config';
import { Navigator } from '@/lib/navigator/Navigator';
import { setLanguage } from '@/utils/redux/Actions';
import '@/utils/i18n/i18n';
import { persistor, store } from '@/utils/redux/Store';

const App = () => {

	const { i18n } = useTranslation();
	const dispatch = useDispatch();

	const { activeLanguage } = useSelector((state: any) => state.allReducer);

	const checkIfActiveLanguageIsNull = () => {
		if (activeLanguage === null) {
			dispatch(setLanguage('en'));
		}
	};

	useEffect(() => {
		checkIfActiveLanguageIsNull();
		i18n.changeLanguage(activeLanguage);
	  }, [ activeLanguage ]);

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return(
		<View style={rootStyles.appContainer}>
			{
				IS_ANDROID ? (
					<StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
				) : (
					<StatusBar barStyle="dark-content" />
				)
			}
			<Navigator />
		</View>
	);
};

const rootStyles = StyleSheet.create({
	appContainer: {
		flex: 1
	},
});

const AppWrapper: FC = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);

export default AppWrapper;
