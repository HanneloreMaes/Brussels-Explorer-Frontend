import { Dimensions, StyleSheet } from 'react-native';

import { DefaultMargins, TextColor, TextStyles } from '@/style';

export const RecentlyStyles = StyleSheet.create({
	container: {
		height: Dimensions.get('window').height/4 + 20,
	},
	title: {
		...TextStyles.titleH2,
		color: TextColor.darkText,
		marginBottom: DefaultMargins.bottomMargin,
	},
});
