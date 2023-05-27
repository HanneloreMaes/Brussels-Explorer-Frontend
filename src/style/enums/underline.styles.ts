import { StyleSheet } from 'react-native';

import { Highlight } from './colors.styles';

export const UnderlineStyle = StyleSheet.create({
	underline: {
		borderBottomWidth: 0.6,
		borderColor: Highlight.grayHighlight,
		marginVertical: 10,
	},
	titleUnderline: {
		borderBottomWidth: 3,
		borderColor: Highlight.tealHighlight,
	},
});
