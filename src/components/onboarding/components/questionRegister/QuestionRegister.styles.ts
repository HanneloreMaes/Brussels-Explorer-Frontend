import { Dimensions, StyleSheet } from 'react-native';

import { Highlight, TextColor, TextStyles } from '@/style';

export const QuestionStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	titleContainer: {
		alignItems: 'center',
	},
	questionContainer: {
		alignItems: 'center',
	},
	questionTitle: {
		...TextStyles.bodyText,
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
		borderColor: TextColor.darkText,
		borderWidth: 1,
		alignItems: 'center',
		paddingVertical: 10,
		borderRadius: 15,
		width: 100
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
		top: Dimensions.get('window').height -50,
		left: 0,
		right: 0,
		bottom: 0,
	},
});
