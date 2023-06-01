import { Dimensions, StyleSheet } from 'react-native';

import { DefaultMargins, Highlight, TextStyles } from '@/style';

const { width, height } = Dimensions.get('window');

export const IntroStyles = StyleSheet.create({
	container: {
		flex: 1
	},
	slideWrapper: {
		flex: 1,
		backgroundColor: 'transparent',
	},
	dot: {
		width: 12,
		height: 12,
		borderRadius: 7,
		marginLeft: 7,
		marginRight: 7
	},
	bottomPagina: {
		bottom: 70,
	},
	image: {
		width,
		height: height / 2
	},
	titleSlide1: {
		...TextStyles.titleH2,
		fontSize: 27,
		color: Highlight.tealHighlight,
		marginBottom: DefaultMargins.bottomMargin,
	},
});
