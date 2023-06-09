import { StyleSheet } from 'react-native';

import { screenWidth } from '@/config';
import { DefaultAppStyling } from '@/style';

export const HeaderStyles = StyleSheet.create({
	container: {
		position: 'relative',
		flexDirection: 'column',
	},
	headerImage: {
		width: screenWidth,
		height: 300,
		opacity: 0.65
	},
	headerContainer: {
		position: 'absolute',
		height: 300,
		justifyContent: 'center',
		marginHorizontal: DefaultAppStyling.globalMargin,
		marginTop: 30,
	},
});
