import { StyleSheet } from 'react-native';

import { DefaultMargins, Highlight, TextColor } from '@/style';

export const LanugageItemStyles = StyleSheet.create({
	container: {
		marginTop: DefaultMargins.verticalMargin
	},
	underlineView: {
		borderBottomWidth: 0.6,
		borderColor: Highlight.grayHighlight,
		marginVertical: 10,
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
