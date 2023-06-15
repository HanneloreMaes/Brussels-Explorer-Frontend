import { StyleSheet } from 'react-native';

import { BorderContainerStyle, DefaultAppStyling, DefaultMargins, Highlight, TextColor, TextStyles } from '@/style';

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
		right: 0,
		left: 0,
		height: 100,
		flexDirection: 'row',
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
	buttonMoreInfo: {
		marginTop: DefaultMargins.bottomMargin,
		width: '75%',
		alignItems: 'center',
	},
	textButton: {
		padding: 5,
		color: TextColor.darkText,
	},
	containerModalPoint: {
		flexDirection: 'column',
		width: 150,
	},
	imagePoint: {
		width: 75,
		height: 75,
		borderRadius: 10,
		marginRight: 15,
	},
});
