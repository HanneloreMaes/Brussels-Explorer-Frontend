import { Dimensions, StyleSheet } from 'react-native';

import { DefaultAppStyling, TextStyles, UnderlineStyle } from '@/style';

export const ItemOverviewStyles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 15,
	},
	image: {
		width: 65,
		height: 65,
		borderRadius: 40,
	},
	textName: {
		fontSize: 25,
		marginLeft: 10,
		fontWeight: '600',
	},
	infoContainer: {
		flexDirection: 'row',
		width: '75%',
		justifyContent: 'space-between',
		marginLeft: 10
	},
	infoTextContainer: {
		flexDirection: 'row',
		alignItems:'center',
	},
	textInfo: {
		...TextStyles.bodyText,
		fontSize: 14,
		marginLeft: 5,
	},
	underline: {
		...UnderlineStyle.underline,
		width: Dimensions.get('screen').width - (DefaultAppStyling.globalMargin * 2),
		marginLeft: DefaultAppStyling.globalMargin
	}
});
