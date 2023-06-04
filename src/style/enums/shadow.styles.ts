import { StyleSheet } from 'react-native';

import { Highlight } from './colors.styles';

export const DefaultShadow = StyleSheet.create({
	onboardingShadowPrimary: {
		shadowColor: Highlight.darkHighlight,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	onboardingShadowSecundary : {
		shadowColor: Highlight.darkHighlight,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.35,
		shadowRadius: 6.30,
		elevation: 2,
	},
	shadowTabBar: {
		shadowColor: Highlight.darkHighlight,
		shadowOffset: { width: 0, height: 8 },
		shadowRadius: 20,
		elevation: 5,
	},
	bottomShadow: {
		shadowOffset: { width: 1, height: 5 },
		shadowOpacity:  0.4,
		shadowRadius: 3,
		elevation: 5,
	},
});
