import { StyleSheet } from 'react-native';

import { Highlight, TextColor } from './colors.styles';

export const TextStyles = StyleSheet.create({
	titleH1: {
		fontFamily: 'ExpletusSans-Medium',
		fontSize: 40,
		marginBottom: 10,
		color: Highlight.tealHighlight,
	},
	titleH2: {
		fontFamily: 'ExpletusSans-Regular',
		fontSize: 25,
		color: TextColor.lightText,
	},
	titleH3: {
		fontFamily: 'ExpletusSans-Regular',
		fontSize: 18,
		color: TextColor.darkText,
	},
	footerText: {
		fontSize: 20,
		fontWeight: '600',
		letterSpacing: 0.5,
		color: TextColor.lightText,
	},
	bodyText: {
		fontFamily: 'Franklin-Book-Regular',
		fontSize: 16,
		color: TextColor.darkText,
	},
	littleText: {
		width: '70%',
		textAlign: 'center',
		color: TextColor.grayText,
	},
	buttonTextPrimary: {
		fontWeight: 'bold',
		fontSize: 25,
		color: TextColor.lightText,
	},
});
