import React, { FC } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { QuestionStyles } from './QuestionRegister.styles';
import { TextStyles } from '@/style';

export const QuestionRegister: FC = () => {
	return (
		<SafeAreaView style={QuestionStyles.container}>
			<View style={QuestionStyles.titleContainer}>
				<Text style={TextStyles.titleH1}>Question Time!</Text>
			</View>
			<View style={QuestionStyles.questionContainer}>
				<Text style={QuestionStyles.questionTitle}>Which themes gets your interest?</Text>
				<View style={QuestionStyles.questionAnswerContainer}>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>Art</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>Food</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>Musea</Text>
						</TouchableOpacity>
					</View>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>Nature</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[ QuestionStyles.touchableNotActive, { width: 120 } ]}
						>
							<Text style={QuestionStyles.textNotActive}>Adventure</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>Fantasy</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={QuestionStyles.questionContainer}>
				<Text style={QuestionStyles.questionTitle}>Select how you want to move around?</Text>
				<View style={QuestionStyles.questionAnswerContainer}>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>On foot</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[ QuestionStyles.touchableNotActive, { width: 120 } ]}
						>
							<Text style={QuestionStyles.textNotActive}>Bike/Step</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>Car</Text>
						</TouchableOpacity>
					</View>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={[ QuestionStyles.touchableNotActive, { width: 175 } ]}
						>
							<Text style={QuestionStyles.textNotActive}>Public Transport</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};
