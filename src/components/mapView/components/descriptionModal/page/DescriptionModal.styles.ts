import { StyleSheet } from 'react-native';

import { TextStyles } from '@/style';

export const DescriptionStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		width: '100%',
	},
	imageContainer: {
		width: 100,
		height: 100,
		borderRadius: 10,
	},
	infoContainer: {
		flexDirection: 'column',
		width: 175,
	},
	buttonMoreInfo: {
		borderWidth: 1,
		borderRadius: 10,
		width: '50%',
	},
	textButton: {
		padding: 5,
		paddingLeft: 12
	},
	titleText: {
		...TextStyles.titleH3,
		fontSize: 20,
	},
	addressText: {
		marginBottom: 15,
	},
});
