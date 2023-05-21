import { StyleSheet } from 'react-native';

import { DefaultAppStyling, Highlight, TextColor } from '@/style';

export const DetailMapStyles = StyleSheet.create({
	mapContainer: {
		marginVertical: DefaultAppStyling.globalMargin,
		height: 300,
	},
	marker: {
		circleColor: Highlight.tealHighlight,
		circleRadius: 12,
		textPitchAlignment: 'map',
	},
	markerText: {
		circleColor: Highlight.tealHighlight,
		textField: '{poiNumber}',
		textColor: TextColor.lightText,
		textPitchAlignment: 'map',
		textIgnorePlacement: true,
	},
});
