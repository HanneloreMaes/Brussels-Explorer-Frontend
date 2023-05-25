import { Dimensions, StyleSheet } from 'react-native';

import { ButtonStyles, DefaultMargins, Highlight, TextColor, TextStyles } from '@/style';

const { width, height } = Dimensions.get('window');

export const SearchStyles = StyleSheet.create({
	loadingContainer: {
		height: Dimensions.get('window').height / 2,
	},
	filterBtnContainer: {
		zIndex: 600,
		position: 'absolute',
		top: 10,
		right: 0,
		width: '28%',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
		marginRight: 10,
		marginBottom: 15,
	},
	filterContainer: {
		position: 'absolute',
		zIndex: 500,
		width,
		height,
	},
	titleCategories: {
		marginHorizontal: DefaultMargins.horizontalMargin,
		marginTop: DefaultMargins.topMargin,
	},
	filterCheckboxContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: DefaultMargins.horizontalMargin,
		marginTop: 10,
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	checkbxoText: {
		...TextStyles.bodyText,
		fontSize: 18,
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	touchableBtnContainer: {
		...ButtonStyles.buttonContainerPrimary,
		height: 40,
		width: '40%',
	},
	touchableBtnText: {
		...ButtonStyles.buttonTextPrimary,
	},
});
