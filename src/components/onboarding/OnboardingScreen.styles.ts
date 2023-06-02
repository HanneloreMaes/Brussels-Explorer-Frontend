import { StyleSheet, Dimensions } from 'react-native';

import { BackgroundColor, DefaultAppStyling, DefaultMargins, DefaultShadow, Highlight, TextColor, TextStyles } from '@/style';

const { height } = Dimensions.get('window');

export const OnboardingStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	titleContainer: {
		position: 'absolute',
		top: '8%',
		left: 0,
		right: 0,
		bottom: 0,
		alignItems: 'center',
	},
	titleOnboarding: {
		...TextStyles.titleH1,
		color: TextColor.lightText,
		fontSize: 30,
	},
	buttonContainer: {
		justifyContent: 'center',
		height: height / 3
	},
	touchableXContainer: {
		width: 35,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textInput: {
		height: 50,
		borderWidth: 1,
		borderColor: Highlight.tealHighlight,
		marginHorizontal: DefaultMargins.horizontalMargin,
		marginVertical: DefaultMargins.verticalMargin,
		borderRadius: 25,
		paddingLeft: 10,
		fontSize: 16,
	},
	formButton: {
		backgroundColor: Highlight.tealHighlight,
		height: 55,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 35,
		marginHorizontal: DefaultMargins.horizontalMargin,
		marginVertical: DefaultMargins.verticalMargin,
		borderWidth: 1,
		borderColor: 'white',
		...DefaultShadow.shadowPrimary,
	},
	formInputContainer: {
		marginBottom: 70,
		zIndex: -1,
		justifyContent: 'center',
	},
	closeBtnContainer: {
		height: 40,
		width: 40,
		justifyContent: 'center',
		alignSelf: 'center',
		backgroundColor: 'white',
		alignItems: 'center',
		borderRadius: 20,
		top: -20,
		...DefaultShadow.shadowSecundary,
	},
	forgotBtn: {
		alignItems: 'flex-end',
		marginHorizontal: DefaultAppStyling.globalMargin,
		marginBottom: DefaultMargins.topMargin,
	},
	forgotText: {
		marginBottom: DefaultMargins.bottomMargin,
		marginTop: 2,
		borderBottomWidth: 0.5,
		borderColor: TextColor.lightGrayText,
		color: TextColor.lightGrayText,
		fontSize: 16,
	},
});
