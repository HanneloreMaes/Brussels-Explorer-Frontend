import { StyleSheet } from 'react-native';

import { DefaultShadow } from '@/style';

export const TabBarStyles = StyleSheet.create({
	safeContainer: {
		paddingVertical: 5,

		...DefaultShadow.shadowTabBar,
	},
	viewContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
