import { StyleSheet } from 'react-native';

import { TextColor , Highlight } from './colors.styles';

export const BorderContainerStyle = {
	borderRadius: 15,
	imageBorderRadius: 10,
	borderWidth: 1,
	borderColor: TextColor.darkText
};

export const DefaultAppStyling = {
	globalMargin: 30,
};

export const DefaultPadding = {
	globalPadding: 10,
};

export const UnderlineStyle = StyleSheet.create({
	underline: {
		borderBottomWidth: 0.6,
		borderColor: Highlight.grayHighlight,
		marginVertical: 10,
	},
});

export const DefaultShadow = StyleSheet.create({
	shadowPrimary : {
		shadowColor: Highlight.darkHighlight,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	shadowSecundary : {
		shadowColor: Highlight.darkHighlight,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.35,
		shadowRadius: 6.30,
		elevation: 2,
	},
	shadowTabBar: {
		shadowColor: Highlight.darkHighlight,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.18,
		shadowRadius: 20,
		elevation: 5,
	},
});
