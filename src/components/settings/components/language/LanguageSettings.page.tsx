import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

import { LanguageItem } from './LanguageItem';
import { DefaultAppStyling } from '@/style';
import '@/utils/i18n/i18n';

export const LanguageSettings: FC = () => {

	const { i18n } = useTranslation();
	const { unAuth } = useSelector((state: any) => state.allReducer);

	const languageData = [
		{
			language: i18n.t('settings_language_label_nl'),
			key: 'nl'
		},
		{
			language: i18n.t('settings_language_label_fr'),
			key: 'fr'
		},
		{
			language: i18n.t('settings_language_label_en'),
			key: 'en'
		},
		{
			language: i18n.t('settings_language_label_de'),
			key: 'de'
		},
	];
	const unAuthLanguageData = [
		{
			language: i18n.t('settings_language_label_nl'),
			key: 'nl'
		},
		{
			language: i18n.t('settings_language_label_en'),
			key: 'en'
		},
	];

	return (
		<View style={{ marginHorizontal: DefaultAppStyling.globalMargin }}>
			<FlatList
				data={unAuth === true ? unAuthLanguageData : languageData}
				renderItem={({ item }) => <LanguageItem languageName={item.language} keyLang={item.key} />}
				keyExtractor={item => item.language}
			/>
		</View>
	);
};
