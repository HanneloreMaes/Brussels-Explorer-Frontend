/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import { View, StyleSheet, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { IS_ANDROID } from '@/config';
import { Navigator } from '@/lib/navigator/Navigator';

const App = () => {

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

export default App;
