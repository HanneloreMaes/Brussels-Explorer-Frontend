import { StyleSheet } from 'react-native';

import { DefaultAppStyling } from '@/style';

export const HeaderStyles = StyleSheet.create({
	container: {
		position: 'relative',
		flexDirection: 'column',
	},
	headerImage: {
		width: '100%',
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
