import { StyleSheet } from 'react-native';

import { BorderContainerStyle, DefaultAppStyling, Highlight, TextColor, TextStyles } from '@/style';

export const DetailMapStyles = StyleSheet.create({
	mapContainer: {
		marginVertical: DefaultAppStyling.globalMargin,
		height: 280,
	},
	mapContainerBig: {
		height: '100%',
	},
	marker: {
		circleColor: Highlight.tealHighlight,
		circleRadius: 20,
		textPitchAlignment: 'map',
	},
	markerText: {
		circleColor: Highlight.tealHighlight,
		textField: '{poiNumber}',
		textColor: TextColor.lightText,
		textPitchAlignment: 'map',
		textIgnorePlacement: true,
	},
	nameModalContainer: {
		position: 'absolute',
		bottom: 10,
		right: 5,
		left: 5,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 30,
		borderRadius: BorderContainerStyle.borderRadius,
	},
	nameModalText: {
		...TextStyles.bodyText,
	},
	scaleMap: {
		position: 'absolute',
		top: 5,
		right: -25,
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 30,
		borderRadius: BorderContainerStyle.borderRadius,
	},
});
