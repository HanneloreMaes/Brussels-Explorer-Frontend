import { StyleSheet, Dimensions } from 'react-native';

import { BackgroundColor, DefaultMargins, DefaultShadow, Highlight } from '@/style';

const { height } = Dimensions.get('window');

export const OnboardingStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: BackgroundColor.light
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
		backgroundColor: BackgroundColor.light,
		marginHorizontal: DefaultMargins.horizontalMargin,
		marginVertical: DefaultMargins.verticalMargin,
		borderRadius: 25,
		paddingLeft: 10,
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
});
