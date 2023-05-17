import { Dimensions, StyleSheet } from 'react-native';

import { BorderContainerStyle, DefaultAppStyling, TextColor, TextStyles } from '@/style';

const { width } = Dimensions.get('window');

export const DetailStyles = StyleSheet.create({
	detailContainer: {
		marginTop: DefaultAppStyling.globalMargin,
	},
	dataContainer: {
		marginHorizontal: DefaultAppStyling.globalMargin,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	borderTextContainer: {
		...BorderContainerStyle,
		borderRadius: 10,
	},
	borderText: {
		paddingVertical: 5,
		paddingHorizontal: 20,
		color: TextColor.darkText,
	},
	imageDetail: {
		width: width - DefaultAppStyling.globalMargin - 30,
		height: 175,
		marginTop: 20,
	},
	titleDetail: {
		...TextStyles.titleH1,
		fontWeight: '500',
		color: TextColor.darkText,
		marginVertical: DefaultAppStyling.globalMargin,
	},
	textDetail: {
		...TextStyles.bodyText,
		fontSize: 14,
	},
});
