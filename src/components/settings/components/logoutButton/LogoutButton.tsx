import React, { FC } from 'react';

import { signOut } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, Text } from 'react-native';

import { ButtonStyles } from '@/style';
import { auth } from '@/utils/Firebase.config';
import '@/utils/i18n/i18n';

interface LogoutTypes { navigation: any }

export const LogoutButton: FC <LogoutTypes> = ({ navigation }) => {

	const { i18n } = useTranslation();
	const logoutHandler = () => {
		signOut(auth)
			.then(() => {
				navigation.replace('Onboarding');
			});
	};

	return (
		<TouchableOpacity style={[ ButtonStyles.buttonContainerPrimary, { marginTop: 100 } ]} onPress={logoutHandler}>
			<Text style={ButtonStyles.buttonTextPrimary}>{i18n.t('onboarding_logout_button')}</Text>
		</TouchableOpacity>
	);
};
