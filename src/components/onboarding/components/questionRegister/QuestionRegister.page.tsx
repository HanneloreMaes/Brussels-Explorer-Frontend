import React, { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { QuestionStyles } from './QuestionRegister.styles';
import { OnboardingNavProps } from '@/lib/navigator/types';
import { BackgroundColor, ButtonStyles, Highlight, TextColor, TextStyles } from '@/style';
import '@/utils/i18n/i18n';
import { setPreferences } from '@/utils/redux/Actions';

export const QuestionRegister: FC <OnboardingNavProps<'QuestionRegister'>> = ({ navigation }) => {

	const dispatch = useDispatch();
	const { i18n } = useTranslation();
	const { nameMode } = useSelector((state: any) => state.allReducer);

	const [ isActiveDistance, setIsActiveDistance ] = useState<string>('');
	const [ isActiveTheme, setIsActiveTheme ] = useState<string>('');

	const setPreferencesArray = () => {
		const prefArray = [ isActiveTheme, isActiveDistance ];
		dispatch(setPreferences(prefArray));
		navigation.navigate('MainStack');
	};

	return (
		<SafeAreaView
			style={[
				QuestionStyles.container,
				{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light }
			]}
		>
			<View style={QuestionStyles.titleContainer}>
				<Text style={TextStyles.titleH1}>{i18n.t('onboarding_question_title')}</Text>
			</View>
			<View style={QuestionStyles.questionContainer}>
				<Text style={[ QuestionStyles.questionTitle, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{i18n.t('onboarding_question_subTitle_themes')}</Text>
				<View style={QuestionStyles.questionAnswerContainer}>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={[
								QuestionStyles.touchableNotActive,
								{ borderColor: isActiveTheme === 'StreetArt' ? Highlight.tealHighlight : TextColor.lightGrayText }
							]}
							onPress={() => setIsActiveTheme('StreetArt')}
						>
							<Text
								style={[
									QuestionStyles.textNotActive,
									{ color: isActiveTheme === 'StreetArt' ?
										Highlight.tealHighlight
										: nameMode === 'dark' ?
											TextColor.lightText
											: TextColor.darkText
									}
								]}
							>{i18n.t('onboarding_question_themes_art')}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								QuestionStyles.touchableNotActive,
								{ borderColor: isActiveTheme === 'Musea' ? Highlight.tealHighlight : TextColor.lightGrayText }
							]}
							onPress={() => setIsActiveTheme('Musea')}
						>
							<Text
								style={[
									QuestionStyles.textNotActive,
									{ color: isActiveTheme === 'Musea' ?
										Highlight.tealHighlight
										: nameMode === 'dark' ?
											TextColor.lightText
											: TextColor.darkText
									}
								]}
							>{i18n.t('onboarding_question_themes_musea')}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								QuestionStyles.touchableNotActive,
								{ borderColor: isActiveTheme === 'Monument' ? Highlight.tealHighlight : TextColor.lightGrayText }
							]}
							onPress={() => setIsActiveTheme('Monument')}
						>
							<Text
								style={[
									QuestionStyles.textNotActive,
									{ color: isActiveTheme === 'Monument' ?
										Highlight.tealHighlight
										: nameMode === 'dark' ?
											TextColor.lightText
											: TextColor.darkText
									}
								]}
							>{i18n.t('onboarding_question_themes_monument')}</Text>
						</TouchableOpacity>
					</View>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={[
								QuestionStyles.touchableNotActive,
								{ borderColor: isActiveTheme === 'Shops' ? Highlight.tealHighlight : TextColor.lightGrayText }
							]}
							onPress={() => setIsActiveTheme('Shops')}
						>
							<Text
								style={[
									QuestionStyles.textNotActive,
									{ color: isActiveTheme === 'Shops' ?
										Highlight.tealHighlight
										: nameMode === 'dark' ?
											TextColor.lightText
											: TextColor.darkText
									}
								]}
							>{i18n.t('onboarding_question_themes_shops')}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								QuestionStyles.touchableNotActive,
								{
									width: 120,
									borderColor: isActiveTheme === 'Other' ? Highlight.tealHighlight : TextColor.lightGrayText
								}
							]}
							onPress={() => setIsActiveTheme('Other')}
						>
							<Text
								style={[
									QuestionStyles.textNotActive,
									{ color: isActiveTheme === 'Other' ?
										Highlight.tealHighlight
										: nameMode === 'dark' ?
											TextColor.lightText
											: TextColor.darkText
									}
								]}
							>{i18n.t('onboarding_question_themes_other')}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={QuestionStyles.questionContainer}>
				<Text style={[ QuestionStyles.questionTitle, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{i18n.t('onboarding_question_subTitle_distance')}</Text>
				<View style={QuestionStyles.questionAnswerContainer}>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={[
								QuestionStyles.touchableNotActive,
								{ borderColor: isActiveDistance === '2km' ? Highlight.tealHighlight : TextColor.lightGrayText }
							]}
							onPress={() => setIsActiveDistance('2km')}
						>
							<Text
								style={[
									QuestionStyles.textNotActive,
									{ color: isActiveDistance === '2km' ?
										Highlight.tealHighlight
										: nameMode === 'dark' ?
											TextColor.lightText
											: TextColor.darkText
									}
								]}
							>2km</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								QuestionStyles.touchableNotActive,
								{
									width: 120,
									borderColor: isActiveDistance === '4km' ? Highlight.tealHighlight : TextColor.lightGrayText
								}
							]}
							onPress={() => setIsActiveDistance('4km')}
						>
							<Text
								style={[
									QuestionStyles.textNotActive,
									{ color: isActiveDistance === '4km' ?
										Highlight.tealHighlight
										: nameMode === 'dark' ?
											TextColor.lightText
											: TextColor.darkText
									}
								]}
							>4km</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								QuestionStyles.touchableNotActive,
								{ borderColor: isActiveDistance === '11km' ? Highlight.tealHighlight : TextColor.lightGrayText }
							]}
							onPress={() => setIsActiveDistance('11km')}
						>
							<Text
								style={[
									QuestionStyles.textNotActive,
									{ color: isActiveDistance === '11km' ?
										Highlight.tealHighlight
										: nameMode === 'dark' ?
											TextColor.lightText
											: TextColor.darkText
									}
								]}
							>11km</Text>
						</TouchableOpacity>
					</View>
					<View style={QuestionStyles.answersContainer}>
						<TouchableOpacity
							style={[
								QuestionStyles.touchableNotActive,
								{ borderColor: isActiveDistance === '15km' ? Highlight.tealHighlight : TextColor.lightGrayText }
							]}
							onPress={() => setIsActiveDistance('15km')}
						>
							<Text
								style={[
									QuestionStyles.textNotActive,
									{ color: isActiveDistance === '15km' ?
										Highlight.tealHighlight
										: nameMode === 'dark' ?
											TextColor.lightText
											: TextColor.darkText
									}
								]}
							>15km</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={QuestionStyles.buttonNextContainer}>
				<Pressable style={ButtonStyles.buttonContainerPrimary} onPress={setPreferencesArray}>
					<Text style={ButtonStyles.buttonTextPrimary}>{i18n.t('onboarding_question_done_button')}</Text>
				</Pressable>
			</View>

		</SafeAreaView>
	);
};
