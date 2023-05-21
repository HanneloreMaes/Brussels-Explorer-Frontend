import { StyleSheet } from 'react-native';

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
		backgroundColor: 'white',
		marginLeft: '20%',
		borderRadius: 15,
	},
	touchableContainer: {
		height: 45,
		width: 128,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
	},
});
