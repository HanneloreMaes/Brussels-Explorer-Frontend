import React, { FC, useState, useEffect } from 'react';

import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { DetailMap } from '../detailMap/DetailMap';
import { TextStyles, TextColor } from '@/style';

export const DescriptionDetail: FC = (props: any) => {

	const { nameMode } = useSelector((state: any) => state.allReducer);

	const [ descriptionInLanguage, setDescriptionInLanguage ] = useState<string>('');

	const checkLanguageDescription = () => {
		if (props?.translations.language === 'nl') {
			setDescriptionInLanguage(props?.dataOfCard.description_nl);
		}
		if (props?.translations.language === 'en') {
			setDescriptionInLanguage(props?.dataOfCard.description_en);
		}
		if (props?.translations.language === 'fr') {
			setDescriptionInLanguage(props?.dataOfCard.description_fr);
		}
		if (props?.translations.language === 'de') {
			setDescriptionInLanguage(props?.dataOfCard.description_de);
		}
	};

	useEffect(() => {
		checkLanguageDescription();
	}, [ props?.dataOfCard ]);

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
			<DetailMap
				dataRoute={props?.dataOfCard}
				handleScaleBigMap={props?.handleScaleBigMap}
				scaleBig={props?.scaleBig}
				navigation={props?.navigation}
				translation={props?.translations}
			/>
		</>
	);
};
