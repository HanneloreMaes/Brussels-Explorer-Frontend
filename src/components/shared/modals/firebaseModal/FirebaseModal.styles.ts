import { Dimensions, StyleSheet } from 'react-native';

import { DefaultAppStyling, BorderContainerStyle, DefaultPadding } from '@/style';

const { height } = Dimensions.get('window');

export const FirebaseStyles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: '40%',
		left: DefaultAppStyling.globalMargin,
		right: DefaultAppStyling.globalMargin,
		height: height / 5,
		justifyContent: 'center',
		borderRadius: BorderContainerStyle.borderRadius,
		zIndex: 5,
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
		fontSize: 18
	},
	closeButtonIcon: {
		position: 'absolute',
		top: 15,
		right: 15
	},
});
