import { StyleSheet } from 'react-native';

import { DefaultAppStyling, Highlight, TextStyles } from '@/style';

export const CardStyles = StyleSheet.create({
	touchableContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 15,
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: Highlight.tealHighlight,
		marginHorizontal: DefaultAppStyling.globalMargin,
	},
	textItem: {
		...TextStyles.titleH3,
	},
	imageExpandArrow: {
		width: 20,
		height: 20,
		transform: [ { rotate: '-90deg' } ],
	},
});
