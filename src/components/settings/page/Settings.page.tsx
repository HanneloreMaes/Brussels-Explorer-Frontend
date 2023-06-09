import React, { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { CardItem, LogoutButton } from '../components';
import { FirebaseModal, RegisterModal } from '@/components/shared';
import { SettingsNavProps } from '@/lib/navigator/types';
import '@/utils/i18n/i18n';

export const SettingsPage: FC <SettingsNavProps<'Settings'>> = ({ navigation }) => {

	const { i18n } = useTranslation();
	const { nameMode, unAuth } = useSelector( (state: any) => state.allReducer );
	const [ showModal, setShowModal ] = useState<boolean>(false);
	const [ stringModal, setStringModal ] = useState<string>('');

	const nameComponents = [
		{
			key: 1,
			name: i18n.t('routes_label_language')
		},
		{
			key: 2,
			name: i18n.t('routes_label_change_password')
		},
		{
			key: 3,
			name: i18n.t('routes_label_change_username')
		},
	];
	const unAuthNameComponents = [
		{
			key: 1,
			name: i18n.t('routes_label_language')
		},
	];

	const handleCloseModal = (value: boolean) => {
		setShowModal(value);
	};
	const handleOpenModal = (value: boolean) => {
		setShowModal(value);
	};
	const handleStringName = (value: string) => {
		setStringModal(value);
	};

	return(
		<>
			{
				showModal === true ? (
					<FirebaseModal
						labelName={stringModal as string}
						handleCloseModal={handleCloseModal}
						nameMode={nameMode}
					/>
				) : null
			}
			<FlatList
				data={unAuth === true ? unAuthNameComponents : nameComponents}
				renderItem={({ item }) =>
					<CardItem
						key={item.key}
						nameComponent={item.name}
						navigation={navigation}
						mode={nameMode}
						handleOpenModal={handleOpenModal}
						handleStringName={handleStringName}
					/>
				}
				keyExtractor={item => item.name}
			/>
			{
				unAuth === true ?
					<RegisterModal navigation={navigation} mode={nameMode} />
					: <LogoutButton navigation={navigation} />
			}
		</>
	);
};
