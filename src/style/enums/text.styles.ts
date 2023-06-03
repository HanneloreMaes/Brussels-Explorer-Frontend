import { StyleSheet } from 'react-native';

import { Highlight, TextColor } from './colors.styles';

export const TextStyles = StyleSheet.create({
	titleH1: {
		fontFamily: 'ExpletusSans-SemiBold',
		fontSize: 42,
		marginBottom: 10,
		color: Highlight.tealHighlight,
	},
	titleH2: {
		fontFamily: 'ExpletusSans-Medium',
		fontSize: 27,
		color: TextColor.lightText,
	},
	titleH3: {
		fontFamily: 'ExpletusSans-Regular',
		fontSize: 22,
		color: TextColor.darkText,
	},
	bodyText: {
		fontFamily: 'Franklin-Book-Regular',
		fontSize: 18,
		color: TextColor.darkText,
	},
});
