import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { View, Text, Dimensions, PixelRatio } from 'react-native';
import { useSelector } from 'react-redux';

import { TitleType } from './TitleH2.types';
import { RecommendedStyles } from '@/components/dashboard/components/sectionRecRoutes/page/RecommendedSection.styles';
import { BARRIER_SCREEN } from '@/config';
import { UnderlineStyle, TextColor } from '@/style';
import '@/utils/i18n/i18n';

const { width } = Dimensions.get('window');

export const TitleH2: FC<TitleType> = ({ labelTitle, prevComponent }) => {

	const screenRation = Dimensions.get('window').width * PixelRatio.get();
	const { i18n } = useTranslation();
	const { nameMode } = useSelector((state: any) => state.allReducer);

	const [ widthContainerRec, setWidthContainerRec ] = useState<number>(width * 0.73);
	const [ widthContainerLast, setWidthContainerLast ] = useState<number>(width * 0.4);

	const checkLanguageWidth = () => {
		const lang = i18n.language;

		if (lang === 'en' && screenRation > BARRIER_SCREEN) {
			setWidthContainerRec(width * 0.73);
			setWidthContainerLast(width * 0.32);
		} else if (lang === 'en' && screenRation < BARRIER_SCREEN) {
			setWidthContainerRec(width * 0.64);
			setWidthContainerLast(width * 0.27);
		}
		if (lang === 'nl' && screenRation > BARRIER_SCREEN) {
			setWidthContainerRec(width * 0.63);
			setWidthContainerLast(width * 0.5);
		} else if (lang === 'nl' && screenRation < BARRIER_SCREEN) {
			setWidthContainerRec(width * 0.55);
			setWidthContainerLast(width * 0.45);
		}
		if (lang === 'fr' && screenRation > BARRIER_SCREEN) {
			setWidthContainerRec(width * 0.8);
			setWidthContainerLast(width * 0.7);
		} else if (lang === 'fr' && screenRation < BARRIER_SCREEN) {
			setWidthContainerRec(width * 0.7);
			setWidthContainerLast(width * 0.6);
		}
		if (lang === 'de' && screenRation > BARRIER_SCREEN) {
			setWidthContainerRec(width * 0.65);
			setWidthContainerLast(width * 0.53);
		} else if (lang === 'de' && screenRation < BARRIER_SCREEN) {
			setWidthContainerRec(width * 0.57);
			setWidthContainerLast(width * 0.45);
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
