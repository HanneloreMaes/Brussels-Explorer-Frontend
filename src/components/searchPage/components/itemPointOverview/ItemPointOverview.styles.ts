import { Dimensions, StyleSheet } from 'react-native';

import { DefaultAppStyling, TextStyles, UnderlineStyle } from '@/style';

export const ItemPointOverviewStyles = StyleSheet.create({
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
	allInfoContainer: {
		marginLeft: 10,
		marginRight: 30,
	},
	infoContainer: {
		flexDirection: 'row',
		width: '83%',
		justifyContent: 'space-between',
		marginLeft: 10,
		marginBottom: 8,
	},
	infoTextContainer: {
		flexDirection: 'row',
		alignItems:'center',
	},
	textInfo: {
		...TextStyles.bodyText,
		fontSize: 14,
		marginLeft: 10,
	},
	underline: {
		...UnderlineStyle.underline,
		width: Dimensions.get('screen').width - (DefaultAppStyling.globalMargin * 2),
		marginLeft: DefaultAppStyling.globalMargin
	}
});
