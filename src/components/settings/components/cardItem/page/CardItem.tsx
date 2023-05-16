import React, { FC, useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, Image, TouchableOpacity } from 'react-native';

import { CardTypes } from '../types/Carditem.types';
import { CardStyles } from './CardItem.styles';
import '@/utils/i18n/i18n';

export const CardItem: FC <CardTypes> = ({ nameComponent, navigation }) => {

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
			<Text style={CardStyles.textItem}>{nameComponent}</Text>
			<Image source={require('../../../../../assets/icons/ic_expand_arrow.png')} style={CardStyles.imageExpandArrow} />
		</TouchableOpacity>
	);
};
