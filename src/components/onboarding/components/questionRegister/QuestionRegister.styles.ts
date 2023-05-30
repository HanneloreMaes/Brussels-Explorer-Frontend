import { Dimensions, StyleSheet } from 'react-native';

import { DefaultMargins, Highlight, TextColor, TextStyles } from '@/style';

export const QuestionStyles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: DefaultMargins.topMargin,
	},
	titleContainer: {
		alignItems: 'center',
	},
	questionContainer: {
		alignItems: 'center',
	},
	questionTitle: {
		...TextStyles.titleH3,
		marginTop: 30,
	},
	questionAnswerContainer: {
		width: '90%',
	},
	answersContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 15,
	},
	touchableNotActive: {
		borderWidth: 1,
		alignItems: 'center',
		paddingVertical: 10,
		borderRadius: 15,
		width: 120
	},
	touchableActive: {
		borderColor: Highlight.tealHighlight,
		borderWidth: 1,
		alignItems: 'center',
		paddingVertical: 10,
		borderRadius: 15,
		width: 100
	},
	textNotActive: {
		color: 'black',
		fontSize: 18,
		paddingHorizontal: 10,
	},
	textActive: {
		color: 'teal',
		fontSize: 18,
		paddingHorizontal: 10,
		fontWeight: 'bold',
	},
	buttonNextContainer: {
		position: 'absolute',
		top: Dimensions.get('window').height -150,
		left: 0,
		right: 0,
		bottom: 0,
	},
});
