import { StyleSheet, Dimensions } from 'react-native';

import { BARRIER_SCREEN_HEIGHT, BARRIER_SCREEN_WIDTH, screenHeight, screenWidth } from '@/config';
import { DefaultAppStyling } from '@/style';

export const DashboardStyles = StyleSheet.create({
	marginContainer: {
		marginHorizontal: DefaultAppStyling.globalMargin,
		marginVertical: DefaultAppStyling.globalMargin,
		height: screenHeight > BARRIER_SCREEN_HEIGHT ?
			'20%' : '33%',
	},
	loadingContainer: {
		height: Dimensions.get('window').height / 2,
	}
});
