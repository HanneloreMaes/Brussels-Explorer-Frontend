import { StyleSheet, Dimensions } from 'react-native';

import { BackgroundColor, DefaultAppStyling } from '@/style';

export const DashboardStyles = StyleSheet.create({
	scrollContainer: {
		backgroundColor: BackgroundColor.light,
	},
	marginContainer: {
		marginHorizontal: DefaultAppStyling.globalMargin,
		marginVertical: DefaultAppStyling.globalMargin,
		height: '20%',
	},
	loadingContainer: {
		height: Dimensions.get('window').height / 2,
	}
});
