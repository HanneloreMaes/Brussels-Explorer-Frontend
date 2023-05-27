import { Dimensions, StyleSheet } from 'react-native';

import { BorderContainerStyle, DefaultMargins, TextColor, TextStyles } from '@/style';

export const RecommendedStyles = StyleSheet.create({
	container: {
		height: Dimensions.get('window').height/3 + 50,
		marginBottom: 30,
	},
	title: {
		...TextStyles.titleH2,
		color: TextColor.darkText,
		marginBottom: 5,
	},
	allDataContainer: {
		flexDirection: 'row',
	},
	dataContainer: {
		width: 150,
		flexDirection: 'column',
		alignItems: 'center',
		marginRight: DefaultMargins.topMargin,
	},
	imageRoute: {
		height: 100,
		width: 150,
		borderRadius: BorderContainerStyle.imageBorderRadius,
		marginBottom: 5,
	},
	nameRoute: {
		...TextStyles.bodyText,
		width: '90%',
		fontSize: 20,
	},
	bottomThemeContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	infoRoute: {
		...TextStyles.bodyText,
		marginBottom: 20,
		color: TextColor.grayText,
	},
	buttonSeeMore: {
		height: 35,
	},
	buttonSeeMoreText: {
		fontSize: 16,
	},
});
