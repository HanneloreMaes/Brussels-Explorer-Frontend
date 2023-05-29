import { StyleSheet } from 'react-native';

import { DefaultMargins, TextColor } from '@/style';

export const LanugageItemStyles = StyleSheet.create({
	container: {
		marginTop: DefaultMargins.verticalMargin
	},
	languageText: {
		fontSize: 20,
		color: TextColor.darkText
	},
	touchableContainer: {
		flexDirection: 'row'
	},
	checkImage: {
		width: 25,
		height: 25,
		marginRight: 5,
	},
});
