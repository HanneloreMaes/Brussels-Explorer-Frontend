import React, { FC, useState, useEffect } from 'react';

import { sendPasswordResetEmail } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { Text, Image, TouchableOpacity } from 'react-native';

import { CardStyles } from './CardItem.styles';
import '@/utils/i18n/i18n';
import { TextColor } from '@/style';
import { auth } from '@/utils/Firebase.config';

export const CardItem: FC = (props: any) => {

	const{ i18n } = useTranslation();
	const [ navName, setNavName ] = useState<string>('');

	const checkName = () => {
		if (props?.nameComponent === i18n.t('routes_label_language')) {
			return setNavName('Language');
		}
		if (props?.nameComponent === i18n.t('routes_label_change_password')) {
			return setNavName('Change Password');
		}
		if (props?.nameComponent === i18n.t('routes_label_change_username')) {
			return setNavName('UsernameSetting');
		}
	};

	const pressSetting = () => {
		if (navName === 'Change Password') {
			const emailUser = auth?.currentUser?.email as string;
			sendPasswordResetEmail(auth, emailUser)
				.then(() => {
					props?.handleStringName('settings_firebase_change_password_succes');
					props?.handleOpenModal(true);
				})
				.catch(() => {
					props?.handleStringName('firebase_error');
					props?.handleOpenModal(true);
				});
		} else {
			props?.navigation.navigate(navName);
		}
	};

	useEffect(() => {
		checkName();
	}, []);

	return (
		<TouchableOpacity
			style={CardStyles.touchableContainer}
			onPress={pressSetting}
		>
			<Text style={[ CardStyles.textItem, { color: props?.mode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{props?.nameComponent}</Text>
			<Image
				source={props?.mode === 'dark' ?
					require('@/assets/icons/ic_expand_arrow_light.png')
					: require('@/assets/icons/ic_expand_arrow_dark.png')
				}
				style={CardStyles.imageExpandArrow}
			/>
		</TouchableOpacity>
	);
};
