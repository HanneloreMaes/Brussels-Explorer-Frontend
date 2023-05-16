import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';

import { CardItem, LogoutButton } from '../components';
import { SettingsNavProps } from '@/lib/navigator/types';
import '@/utils/i18n/i18n';

export const SettingsPage: FC <SettingsNavProps<'Settings'>> = ({ navigation }) => {
	const { i18n } = useTranslation();
	const nameComponents = [
		{
			name: i18n.t('routes_label_language')
		},
	];

	return(
		<>
			<FlatList
				data={nameComponents}
				renderItem={({ item }) => <CardItem nameComponent={item.name} navigation={navigation} />}
				keyExtractor={item => item.name}
			/>
			<LogoutButton navigation={navigation} />
		</>
	);
};
