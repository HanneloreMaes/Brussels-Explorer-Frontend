import React, { FC, useEffect, useState } from 'react';

import { User, updateProfile } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { OnboardingStyles } from '@/components/onboarding/OnboardingScreen.styles';
import { FirebaseModal } from '@/components/shared';
import * as RootNavigation from '@/lib/rootNavigator/RootNavigator';
import { BackgroundColor, ButtonStyles, DefaultAppStyling, DefaultMargins, TextColor, TextStyles } from '@/style';
import '@/utils/i18n/i18n';
import { auth } from '@/utils/Firebase.config';

export const UsernameSetting: FC = () => {

	const{ i18n } = useTranslation();
	const [ newUsername, setNewUsername ] = useState<string>('');
	const [ oldUsername, setOldUsername ] = useState<string | null | undefined>('');
	const [ authUsername, setAuthUsername ] = useState<string | null | undefined>('');
	const [ showModal, setShowModal ] = useState<boolean>(false);
	const [ stringModal, setStringModal ] = useState<string>('');

	const { nameMode } = useSelector( (state: any) => state.allReducer );

	const oldUsernameUser = () => {
		if (auth.currentUser?.displayName !== undefined || auth.currentUser?.displayName !== null ) {
			setAuthUsername(auth.currentUser?.displayName);
			setOldUsername(auth.currentUser?.displayName);
		} else {
			setAuthUsername(null);
			setOldUsername(null);
		}
	};

	const saveUsername = (newUsernameOfUser: string | null | undefined) => {
		if (newUsernameOfUser !== oldUsername && newUsernameOfUser !== '') {
			updateProfile(auth.currentUser as User, { displayName: newUsernameOfUser })
				.then(() => {
					setShowModal(true);
					setStringModal('settings_alert_change_name_succes');
					RootNavigation.navigate('DashboardStack');
				})
				.catch(() => {
					setStringModal('firebase_error');
					setShowModal(true);
				});
		} else if (newUsernameOfUser === '') {
			setShowModal(true);
			setStringModal('settings_alert_change_name_empty');
		} else {
			setShowModal(true);
			setStringModal('settings_alert_change_name_failed');
		}
	};

	const handleCloseModal = (value: boolean) => {
		setShowModal(value);
	};

	useEffect(() => {
		oldUsernameUser();
	}, []);

	return (
		<View style={{ height: '100%' }}>
			{
				showModal === true ? (
					<FirebaseModal
						labelName={stringModal as string}
						handleCloseModal={handleCloseModal}
						nameMode={nameMode}
						newUsernameOfUser={newUsername}
					/>
				) : null
			}
			<View style={{ marginTop: DefaultMargins.topMargin, marginBottom: DefaultMargins.bottomMargin }}>
				<Text style={[
					TextStyles.bodyText,
					{
						color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
						marginHorizontal: DefaultAppStyling.globalMargin,
					}
				]}>{i18n.t('settings_title_old_name')}:</Text>
				<TextInput
					placeholder={authUsername !== null ? authUsername : i18n.t('settings_placeholder_old_name') as string | undefined}
					placeholderTextColor={ nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
					autoCapitalize="none"
					textContentType="name"
					value={oldUsername as string}
					onChangeText={(text) => setOldUsername(text)}
					style={[
						OnboardingStyles.textInput,
						{
							backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
							color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
						}
					]}
				/>
			</View>
			<View>
				<Text style={[
					TextStyles.bodyText,
					{
						color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
						marginHorizontal: DefaultAppStyling.globalMargin,
					}
				]}>{i18n.t('settings_title_name')}:</Text>
				<TextInput
					placeholder={i18n.t('settings_placeholder_name') as string | undefined}
					placeholderTextColor={ nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
					autoCapitalize="none"
					textContentType="name"
					value={newUsername}
					onChangeText={(text) => setNewUsername(text)}
					style={[
						OnboardingStyles.textInput,
						{
							backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
							color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
						}
					]}
				/>
			</View>
			<TouchableOpacity
				style={[ ButtonStyles.buttonContainerPrimary, { marginTop: 100 } ]}
				onPress={() => {
					saveUsername(newUsername);
				}}
			>
				<Text style={ButtonStyles.buttonTextPrimary}>{i18n.t('settings_button_change_name')}</Text>
			</TouchableOpacity>
		</View>
	);
};
