import { StyleSheet } from 'react-native';

import { BackgroundColor, Highlight, TextColor } from './colors.styles';
import { TextStyles } from './text.styles';

export const ButtonStyles = StyleSheet.create({
	buttonContainerPrimary: {
		backgroundColor: Highlight.tealHighlight,
		height: 55,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 35,
		marginHorizontal: 20,
		marginVertical: 10,
		borderWidth: 1,
		borderColor: BackgroundColor.light,
	},
	skipButtonContainer: {
		backgroundColor: BackgroundColor.skipBtnWhite,
		height: 55,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 35,
		marginHorizontal: 20,
		marginVertical: 10,
	},
	buttonTextPrimary: {
		fontFamily: 'Franklin-Book-Regular',
		fontSize: 20,
		letterSpacing: 0.5,
		color: TextColor.lightText,
	},
	skipButtonText: {
		fontFamily: 'Franklin-Book-Regular',
		fontSize: 20,
		letterSpacing: 0.5,
		color: TextColor.darkText,
	},
});
