import { Dimensions, StyleSheet } from 'react-native';

import { BorderContainerStyle, DefaultAppStyling, DefaultPadding } from '@/style';

const { height } = Dimensions.get('window');

export const ModalErrorStyles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: '40%',
		left: DefaultAppStyling.globalMargin,
		right: DefaultAppStyling.globalMargin,
		height: height / 5,
		justifyContent: 'center',
		borderRadius: BorderContainerStyle.borderRadius,
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
	tryAgainText: {
		paddingTop: 10
	},
});
