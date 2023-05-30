import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { CardItem, LogoutButton } from '../components';
import { RegisterModal } from '@/components/shared';
import { SettingsNavProps } from '@/lib/navigator/types';
import '@/utils/i18n/i18n';

export const SettingsPage: FC <SettingsNavProps<'Settings'>> = ({ navigation }) => {
	const { i18n } = useTranslation();
	const { nameMode, unAuth } = useSelector( (state: any) => state.allReducer );

	const nameComponents = [
		{
			key: 1,
			name: i18n.t('routes_label_language')
		},
	];
	const unAuthNameComponents = [
		{
			key: 1,
			name: i18n.t('routes_label_language')
		},
	];

	return(
		<>
			<FlatList
				data={unAuth === true ? unAuthNameComponents : nameComponents}
				renderItem={({ item }) =>
					<CardItem key={item.key} nameComponent={item.name} navigation={navigation} mode={nameMode} />
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
