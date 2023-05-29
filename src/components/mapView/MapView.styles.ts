import { Dimensions, StyleSheet } from 'react-native';

import { BackgroundColor, BorderContainerStyle } from '@/style';

export const MapStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	modalContainer: {
		position: 'absolute',
		height: 150,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 30,
		borderRadius: BorderContainerStyle.borderRadius,
		top: '75%',
	},
});
