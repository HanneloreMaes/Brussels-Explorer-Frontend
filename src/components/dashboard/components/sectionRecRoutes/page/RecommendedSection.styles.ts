import { Dimensions, StyleSheet } from 'react-native';

import { BorderContainerStyle, DefaultMargins, DefaultShadow, Highlight, TextColor, TextStyles } from '@/style';

export const RecommendedStyles = StyleSheet.create({
	container: {
		height: Dimensions.get('window').height/3 + 70,
		marginBottom: 30,
	},
	title: {
		...TextStyles.titleH2,
		color: TextColor.darkText,
		marginBottom: 5,
	},
	scrollView: {
		flexDirection: 'row',
	},
	allDataParentContainer: {
		width: 150,
		marginRight: 10,
		overflow: 'hidden',
		paddingBottom: 15,
	},
	allDataChildContainer: {
		...DefaultShadow.bottomShadow,
		width: '100%',
		height: '100%',
		borderRadius: BorderContainerStyle.borderRadius,
	},
	dataContainer: {
		width: 150,
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		marginRight: DefaultMargins.topMargin,
		borderWidth: BorderContainerStyle.borderWidth,
		borderRadius: BorderContainerStyle.borderRadius,
		borderColor: BorderContainerStyle.borderColor,
	},
	imageRoute: {
		height: 120,
		width: 148,
		marginBottom: DefaultMargins.bottomMargin,
		borderTopLeftRadius: BorderContainerStyle.borderRadius,
		borderTopRightRadius: BorderContainerStyle.borderRadius
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
	},
	buttonSeeMore: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Highlight.tealHighlight,
		borderRadius: BorderContainerStyle.borderRadius,
	},
	buttonSeeMoreText: {
		...TextStyles.titleH2,
		marginBottom: DefaultMargins.horizontalMargin,
		textAlign: 'center',
	},
});
