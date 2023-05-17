import { Dimensions, StyleSheet } from 'react-native';

import { BorderContainerStyle, DefaultMargins, TextColor, TextStyles } from '@/style';

export const RecommendedStyles = StyleSheet.create({
	container: {
		height: Dimensions.get('window').height/4 + 20,
	},
	title: {
		...TextStyles.titleH2,
		color: TextColor.darkText,
		marginBottom: DefaultMargins.bottomMargin + 15,
	},
	allDataContainer: {
		flexDirection: 'row',
	},
	dataContainer: {
		width: 150,
		flexDirection: 'column',
		alignItems: 'center',
		marginRight: DefaultMargins.topMargin
	},
	imageRoute: {
		height: 100,
		width: 150,
		borderRadius: BorderContainerStyle.imageBorderRadius
	},
	nameRoute: {
		...TextStyles.bodyText,
		fontSize: 20,
	},
	infoRoute: {
		fontSize: 14,
		marginBottom: 20,
		color: TextColor.grayText
	},
});
