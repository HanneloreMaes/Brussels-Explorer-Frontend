import { Dimensions, StyleSheet } from 'react-native';

export const SearchStyles = StyleSheet.create({
	loadingContainer: {
		height: Dimensions.get('window').height / 2,
	},
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10,
		marginTop: 10,
	},
	image: {
		width: 65,
		height: 65,
		borderRadius: 40,
	},
	textName: {
		fontSize: 17,
		marginLeft: 10,
		fontWeight: '600',
	},
	textAddress: {
		fontSize: 14,
		marginLeft: 10,
		color: 'grey',
	},
});
