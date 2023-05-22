import { Dimensions, StyleSheet } from 'react-native';

import { BackgroundColor, BorderContainerStyle } from '@/style';

export const MapStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	mapContainer: {
		width: Dimensions.get('screen').width,
		height: Dimensions.get('screen').height,
	},
	imageDimensions: {
		width: 30,
		height: 30,
	},
	imageDimensionsActive: {
		width: 150,
		height: 150,
	},
	modalContainer: {
		position: 'absolute',
		backgroundColor: BackgroundColor.light,
		height: 150,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 30,
		borderRadius: BorderContainerStyle.borderRadius,
		top: '75%',
	},
});
