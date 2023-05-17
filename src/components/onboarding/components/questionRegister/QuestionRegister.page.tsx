import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { QuestionStyles } from './QuestionRegister.styles';
import { OnboardingNavProps } from '@/lib/navigator/types';
import { ButtonStyles, TextStyles } from '@/style';
import '@/utils/i18n/i18n';

export const QuestionRegister: FC <OnboardingNavProps<'QuestionRegister'>> = ({ navigation }) => {

	const { i18n } = useTranslation();

	return (
		<SafeAreaView style={QuestionStyles.container}>
			<View style={QuestionStyles.titleContainer}>
				<Text style={TextStyles.titleH1}>{i18n.t('onboarding_question_title')}</Text>
			</View>
			<View style={QuestionStyles.questionContainer}>
				<Text style={QuestionStyles.questionTitle}>{i18n.t('onboarding_question_subTitle_themes')}</Text>
				<View style={QuestionStyles.questionAnswerContainer}>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>{i18n.t('onboarding_question_themes_art')}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>{i18n.t('onboarding_question_themes_food')}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>{i18n.t('onboarding_question_themes_musea')}</Text>
						</TouchableOpacity>
					</View>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>{i18n.t('onboarding_question_themes_nature')}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[ QuestionStyles.touchableNotActive, { width: 120 } ]}
						>
							<Text style={QuestionStyles.textNotActive}>{i18n.t('onboarding_question_themes_adventure')}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>{i18n.t('onboarding_question_themes_fantasy')}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={QuestionStyles.questionContainer}>
				<Text style={QuestionStyles.questionTitle}>{i18n.t('onboarding_question_subTitle_transport')}</Text>
				<View style={QuestionStyles.questionAnswerContainer}>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>{i18n.t('onboarding_question_transport_foot')}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[ QuestionStyles.touchableNotActive, { width: 120 } ]}
						>
							<Text style={QuestionStyles.textNotActive}>{i18n.t('onboarding_question_transport_bike')}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={QuestionStyles.touchableNotActive}
						>
							<Text style={QuestionStyles.textNotActive}>{i18n.t('onboarding_question_transport_car')}</Text>
						</TouchableOpacity>
					</View>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={[ QuestionStyles.touchableNotActive, { width: 175 } ]}
						>
							<Text style={QuestionStyles.textNotActive}>{i18n.t('onboarding_question_transport_public')}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={QuestionStyles.buttonNextContainer}>
				<Pressable style={ButtonStyles.buttonContainerPrimary} onPress={() => navigation.navigate('MainStack')}>
					<Text style={ButtonStyles.buttonTextPrimary}>{i18n.t('onboarding_question_done_button')}</Text>
				</Pressable>
			</View>

		</SafeAreaView>
	);
};
