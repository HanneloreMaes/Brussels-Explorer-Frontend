import React, { FC, useEffect, useState } from 'react';

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

	const [ widthContainerRec, setWidthContainerRec ] = useState<string>('70%');
	const [ widthContainerLast, setWidthContainerLast ] = useState<string>('29%');

	const checkLanguageWidth = () => {
		const lang = i18n.language;

		if (lang === 'en') {
			setWidthContainerRec('70%');
			setWidthContainerLast('29%');
		}
		if (lang === 'fr') {
			setWidthContainerRec('75%');
			setWidthContainerLast('65.5%');
		}
		if (lang === 'nl') {
			setWidthContainerRec('63%');
			setWidthContainerLast('50%');
		}
		if (lang === 'de') {
			setWidthContainerRec('65%');
			setWidthContainerLast('53%');
		}
	};

	useEffect(() => {
		checkLanguageWidth();
	},[ i18n.language ]);

	return (
		<View style={{ width: prevComponent === 'Last' ? widthContainerLast : widthContainerRec }}>
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
