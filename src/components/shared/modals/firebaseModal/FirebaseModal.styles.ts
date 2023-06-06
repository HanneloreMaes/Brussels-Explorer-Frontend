import { Dimensions, StyleSheet } from 'react-native';

import { DefaultAppStyling, BorderContainerStyle, DefaultPadding, DefaultMargins, BackgroundColor } from '@/style';

const { height } = Dimensions.get('window');

export const FirebaseStyles = StyleSheet.create({
	opacityBackground: {
		position: 'absolute',
		height: '500%',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 9
	},
	container: {
		position: 'absolute',
		top: '35%',
		left: DefaultAppStyling.globalMargin,
		right: DefaultAppStyling.globalMargin,
		height: height / 5,
		justifyContent: 'center',
		borderRadius: BorderContainerStyle.borderRadius,
		zIndex: 10,
	},
	imgExlametion: {
		width: 35,
		height: 35,
		position: 'absolute',
		top: '-11.5%',
		right: '-4.5%',
	},
	textError: {
		paddingHorizontal:  DefaultPadding.globalPadding,
		marginLeft: 10,
		fontSize: 18,
		marginTop: DefaultMargins.topMargin,
	},
	closeButtonIcon: {
		position: 'absolute',
		top: 15,
		right: 15,
	},
});
