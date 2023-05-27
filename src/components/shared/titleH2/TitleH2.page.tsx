import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { TitleType } from './TitleH2.types';
import { RecommendedStyles } from '@/components/dashboard/components/sectionRecRoutes/page/RecommendedSection.styles';
import { UnderlineStyle, TextColor } from '@/style';
import '@/utils/i18n/i18n';

export const TitleH2: FC<TitleType> = ({ labelTitle, prevComponent }) => {

	const { i18n } = useTranslation();
	const { nameMode } = useSelector((state: any) => state.allReducer);

	return (
		<View style={{ width: prevComponent === 'Last' ? '29%' : '70%' }}>
			<View
				style={[
					UnderlineStyle.titleUnderline,
					{
						marginBottom: 5,
						width: prevComponent === 'Last' ? '29%' : '35%'
					}
				]}
			/>
			<Text
				style={[
					RecommendedStyles.title,
					{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
				]}
			>{i18n.t(labelTitle)}</Text>
			<View
				style={[
					UnderlineStyle.titleUnderline,
					{
						marginBottom: 15,
						width: prevComponent === 'Last' ? '29%' : '35%',
						alignSelf: 'flex-end'
					}
				]}
			/>
		</View>
	);
};
