import { Dimensions, StyleSheet } from 'react-native';

import { BorderContainerStyle, DefaultAppStyling, DefaultMargins, Highlight, TextColor, TextStyles } from '@/style';

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
	infoTextContainer: {
		flexDirection: 'row',
		alignItems:'center',
		marginBottom: DefaultAppStyling.globalMargin,
	},
	borderTextContainer: {
		...BorderContainerStyle,
		borderRadius: 10,
	},
	borderText: {
		...TextStyles.bodyText,
		paddingVertical: 5,
		paddingHorizontal: 5,
	},
	imageDetail: {
		width: width - DefaultAppStyling.globalMargin - 30,
		height: 175,
		marginTop: 20,
	},
	titleDetail: {
		...TextStyles.titleH1,
		color: TextColor.darkText,
		marginVertical: DefaultAppStyling.globalMargin,
	},
	themeTitle: {
		...TextStyles.bodyText,
		fontSize: 20,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	typePoint: {
		...TextStyles.titleH2,
		color: Highlight.tealHighlight,
	},
});
