import { StyleSheet } from 'react-native';

import { BorderContainerStyle, DefaultAppStyling, DefaultMargins, DefaultPadding, TextColor, TextStyles } from '@/style';

export const PopularStyles = StyleSheet.create({
	container: {
		borderWidth: BorderContainerStyle.borderWidth,
		borderRadius: BorderContainerStyle.borderRadius,
		borderColor: BorderContainerStyle.borderColor,
		padding: DefaultPadding.globalPadding,
		height: 300,
		marginBottom: DefaultAppStyling.globalMargin,
	},
	title: {
		color: TextColor.darkText,
		marginBottom: DefaultMargins.bottomMargin + 15,
	},
	allDataContainer: {
		flexDirection: 'row',
	},
	dataContainer: {
		borderWidth: BorderContainerStyle.borderWidth,
		borderRadius: BorderContainerStyle.borderRadius,
		borderColor: BorderContainerStyle.borderColor,
		padding: 6,
		marginRight: DefaultMargins.horizontalMargin - 5,
	},
	imageRoute: {
		height: 130,
		borderRadius: BorderContainerStyle.imageBorderRadius,
		marginBottom: DefaultMargins.bottomMargin,
	},
	nameRoute: {
		...TextStyles.bodyText,
		fontSize: 18,
	},
	infoRoute: {
		fontSize: 11,
		marginBottom: 20,
	},
});
