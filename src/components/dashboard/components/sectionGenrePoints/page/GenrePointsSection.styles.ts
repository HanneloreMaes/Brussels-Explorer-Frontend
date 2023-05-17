import { StyleSheet } from 'react-native';

import { BorderContainerStyle, DefaultAppStyling, DefaultMargins, DefaultPadding, TextColor } from '@/style';

export const GenreStyles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		height: 280,
		borderWidth: BorderContainerStyle.borderWidth,
		borderRadius: BorderContainerStyle.borderRadius,
		borderColor: BorderContainerStyle.borderColor,
		padding: DefaultPadding.globalPadding,
		marginBottom: DefaultAppStyling.globalMargin,
	},
	title: {
		color: TextColor.darkText,
		marginBottom: DefaultMargins.bottomMargin + 15,
	},
	image: {
		width: 105,
		height: 130,
		borderRadius: BorderContainerStyle.imageBorderRadius,
		marginBottom: DefaultMargins.bottomMargin,
	},
	test: {
		borderWidth: BorderContainerStyle.borderWidth,
		borderRadius: BorderContainerStyle.borderRadius,
		borderColor: BorderContainerStyle.borderColor,
		padding: 6,
		marginRight: DefaultMargins.horizontalMargin - 5,
		width: 120,
	},
});
