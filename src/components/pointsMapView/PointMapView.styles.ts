import { StyleSheet } from 'react-native';

import { BackgroundColor, BorderContainerStyle } from '@/style';

export const PointMapStyles = StyleSheet.create({
	container: {
		flex: 1
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
