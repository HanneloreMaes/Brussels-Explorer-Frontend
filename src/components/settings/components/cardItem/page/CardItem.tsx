import React, { FC, useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, Image, TouchableOpacity } from 'react-native';

import { CardStyles } from './CardItem.styles';
import { CardTypes } from '../types/Carditem.types';
import '@/utils/i18n/i18n';
import { TextColor } from '@/style';

export const CardItem: FC <CardTypes> = ({ nameComponent, navigation, mode }) => {

	const{ i18n } = useTranslation();
	const [ navName, setNavName ] = useState<string>('');

	const checkName = () => {
		if (nameComponent === i18n.t('routes_label_language')) {
			return setNavName('Language');
		}
	};

	const pressSetting = () => {
		navigation.navigate(navName);
	};

	useEffect(() => {
		checkName();
	}, []);

	return (
		<TouchableOpacity
			style={CardStyles.touchableContainer}
			onPress={pressSetting}
		>
			<Text style={[ CardStyles.textItem, { color: mode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{nameComponent}</Text>
			<Image
				source={mode === 'dark' ?
					require('../../../../../assets/icons/ic_expand_arrow_light.png')
					: require('../../../../../assets/icons/ic_expand_arrow_dark.png')
				}
				style={CardStyles.imageExpandArrow}
			/>
		</TouchableOpacity>
	);
};
