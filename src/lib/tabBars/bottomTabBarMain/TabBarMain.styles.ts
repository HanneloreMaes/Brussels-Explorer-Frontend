import { StyleSheet } from 'react-native';

import { BackgroundColor, DefaultShadow } from '@/style';

export const TabBarStyles = StyleSheet.create({
	safeContainer: {
		paddingVertical: 5,
		backgroundColor: BackgroundColor.light,

		...DefaultShadow.shadowTabBar,
	},
	viewContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
