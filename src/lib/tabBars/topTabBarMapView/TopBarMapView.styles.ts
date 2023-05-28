import { StyleSheet } from 'react-native';

import { BorderContainerStyle } from '@/style';

export const TopBarStyles = StyleSheet.create({
	barContainer: {
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		width: '60%',
		height: 50,
		marginTop: 50,
		zIndex: 500,
		marginLeft: '20%',
		borderRadius: BorderContainerStyle.borderRadius,
	},
	touchableContainer: {
		height: 45,
		width: '48%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
	},
});
