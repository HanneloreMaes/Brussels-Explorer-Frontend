import React, { FC, useState, useEffect } from 'react';

import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { DescriptionTypes } from './DescriptionDetail.types';
import { DetailMap } from '../detailMap/DetailMap';
import { TextStyles, TextColor } from '@/style';

export const DescriptionDetail: FC <DescriptionTypes> = ({ props, translations }) => {

	const { nameMode } = useSelector((state: any) => state.allReducer);

	const [ descriptionInLanguage, setDescriptionInLanguage ] = useState<string>('');

	const checkLanguageDescription = () => {
		if (translations.language === 'nl') {
			setDescriptionInLanguage(props.description_nl);
		}
		if (translations.language === 'en') {
			setDescriptionInLanguage(props.description_en);
		}
		if (translations.language === 'fr') {
			setDescriptionInLanguage(props.description_fr);
		}
		if (translations.language === 'de') {
			setDescriptionInLanguage(props.description_de);
		}
	};

	useEffect(() => {
		checkLanguageDescription();
	}, [ props ]);

	return (
		<>
			<Text
				style={[
					TextStyles.bodyText,
					{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
				]}
			>
				{descriptionInLanguage}
			</Text>
			<DetailMap dataRoute={props} />
		</>
	);
};
