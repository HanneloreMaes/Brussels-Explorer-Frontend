import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { TextStyles } from '@/style';
import '@/utils/i18n/i18n';

export const NotFoundText: FC = () => {

	const { i18n } = useTranslation();

	return (
		<View style={{ alignItems: 'center', marginTop: 30 }}>
			<Text style={TextStyles.titleH3}>{i18n.t('search_notFound')}</Text>
		</View>
	);
};
