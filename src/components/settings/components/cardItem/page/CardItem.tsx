import React, { FC, useState, useEffect } from 'react';

import { sendPasswordResetEmail } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { Text, Image, TouchableOpacity } from 'react-native';

import { CardStyles } from './CardItem.styles';
import { CardTypes } from '../types/Carditem.types';
import '@/utils/i18n/i18n';
import { FirebaseModal } from '@/components/shared';
import { TextColor } from '@/style';
import { auth } from '@/utils/Firebase.config';

export const CardItem: FC <CardTypes> = ({ nameComponent, navigation, mode }) => {

	const{ i18n } = useTranslation();
	const [ navName, setNavName ] = useState<string>('');
	const [ showModal, setShowModal ] = useState<boolean>(false);
	const [ stringModal, setStringModal ] = useState<string>('');

	const handleCloseModal = (value: boolean) => {
		setShowModal(value);
	};

	const checkName = () => {
		if (nameComponent === i18n.t('routes_label_language')) {
			return setNavName('Language');
		}
		if (nameComponent === i18n.t('routes_label_change_password')) {
			return setNavName('Change Password');
		}
		if (nameComponent === i18n.t('routes_label_change_username')) {
			return setNavName('UsernameSetting');
		}
	};

	const pressSetting = () => {
		if (navName === 'Change Password') {
			const emailUser = auth?.currentUser?.email as string;
			sendPasswordResetEmail(auth, emailUser)
				.then(() => {
					setStringModal('settings_firebase_change_password_succes');
					setShowModal(true);
				})
				.catch(() => {
					setStringModal('firebase_error');
					setShowModal(true);
				});
		} else {
			navigation.navigate(navName);
		}
	};

	useEffect(() => {
		checkName();
	}, []);

	return (
		<>
			{
				showModal === true ? (
					<FirebaseModal
						labelName={stringModal as string}
						handleCloseModal={handleCloseModal}
						nameMode={mode}
					/>
				) : null
			}
			<TouchableOpacity
				style={CardStyles.touchableContainer}
				onPress={pressSetting}
			>
				<Text style={[ CardStyles.textItem, { color: mode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{nameComponent}</Text>
				<Image
					source={mode === 'dark' ?
						require('@/assets/icons/ic_expand_arrow_light.png')
						: require('@/assets/icons/ic_expand_arrow_dark.png')
					}
					style={CardStyles.imageExpandArrow}
				/>
			</TouchableOpacity>
		</>
	);
};
