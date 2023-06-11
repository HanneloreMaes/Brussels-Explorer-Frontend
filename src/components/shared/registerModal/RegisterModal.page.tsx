import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { RegisterModalTypes } from './RegisterModal.types';
import { ModalErrorStyles } from '../modals/modalErrors/ModalError.styles';
import { BackgroundColor, ButtonStyles, DefaultAppStyling, TextColor } from '@/style';
import '@/utils/i18n/i18n';

export const RegisterModal: FC <RegisterModalTypes> = ({ navigation, mode }) => {

	const { i18n } = useTranslation();
	const { nameMode } = useSelector((state: any) => state.allReducer );

	return (
		<View
			style={{
				backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
				marginTop: DefaultAppStyling.globalMargin,
			}}
		>
			<Text
				style={[
					ModalErrorStyles.textError,
					{
						color: mode === 'dark' ? TextColor.lightText : TextColor.darkText,
						fontSize: 20,
						marginBottom: 10,
					}
				]}
			>{i18n.t('modal_un_auth_preview_text')}</Text>
			<Text
				style={[
					ModalErrorStyles.textError,
					{
						color: mode === 'dark' ? TextColor.lightText : TextColor.darkText,
						fontSize: 20,
						marginBottom: DefaultAppStyling.globalMargin,
					}
				]}
			>{i18n.t('modal_un_auth_more_features_text')}</Text>
			<TouchableOpacity
				style={ButtonStyles.buttonContainerPrimary}
				onPress={() => {
					navigation.replace('OnboardingScreen');
				}}
			>
				<Text style={ButtonStyles.buttonTextPrimary}>{i18n.t('modal_un_auth_button_login_register_text')}</Text>
			</TouchableOpacity>
		</View>
	);
};
