import { Dimensions, StyleSheet } from 'react-native';

import { DefaultMargins, TextStyles } from '@/style';

export const LastStyles = StyleSheet.create({
	container: {
		height: Dimensions.get('window').height/3 + 20,
	},
	title: {
		...TextStyles.titleH2,
		marginBottom: DefaultMargins.bottomMargin,
	},
	bottomContainer: {
		justifyContent: 'flex-end',
		height: '35%'
	}
});
