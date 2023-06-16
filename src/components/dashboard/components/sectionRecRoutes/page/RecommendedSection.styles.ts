import { StyleSheet } from 'react-native';

import { BARRIER_SCREEN_HEIGHT, BARRIER_SCREEN_WIDTH, BARRIER_SCREEN_WIDTH_SMALL, screenHeight, screenWidth } from '@/config';
import { BorderContainerStyle, DefaultMargins, DefaultShadow, Highlight, TextColor, TextStyles } from '@/style';

export const RecommendedStyles = StyleSheet.create({
	container: {
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
		width: screenWidth > BARRIER_SCREEN_WIDTH ?
			screenWidth * 0.15
			: screenWidth < BARRIER_SCREEN_WIDTH_SMALL ?
				screenWidth * 0.23 : screenWidth * 0.2,
		marginRight: 15,
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
		width: screenWidth > BARRIER_SCREEN_WIDTH ?
			screenWidth * 0.15
			: screenWidth < BARRIER_SCREEN_WIDTH_SMALL ?
				screenWidth * 0.23 : screenWidth * 0.2,
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		marginRight: DefaultMargins.topMargin,
		borderWidth: BorderContainerStyle.borderWidth,
		borderRadius: BorderContainerStyle.borderRadius,
	},
	imageRoute: {
		height: screenHeight > BARRIER_SCREEN_HEIGHT ?
			screenHeight * 0.06 : screenHeight * 0.11,
		width: screenWidth > BARRIER_SCREEN_WIDTH ?
			screenWidth * 0.15 - 3
			: screenWidth < BARRIER_SCREEN_WIDTH_SMALL ?
				screenWidth * 0.23 - 3 : screenWidth * 0.2 - 3,
		marginBottom: DefaultMargins.bottomMargin,
		borderTopLeftRadius: 13,
		borderTopRightRadius: 13
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
