import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { TextColor, TextStyles } from '@/style';
import '@/utils/i18n/i18n';

export const NotFoundText: FC = () => {

	const { i18n } = useTranslation();
	const { nameMode } = useSelector( (state: any) => state.allReducer );

	return (
		<View style={{ alignItems: 'center', marginTop: 30 }}>
			<Text style={[ TextStyles.titleH3, { color: nameMode === 'light' ? TextColor.lightText : TextColor.darkText } ]}>{i18n.t('search_notFound')}</Text>
		</View>
	);
};
