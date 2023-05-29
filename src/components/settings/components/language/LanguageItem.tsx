import React, { FC, useState, useEffect } from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { LanugageItemStyles } from './LanguageItem.styles';
import { LanguageItemType } from './languageItem.types';
import { TextColor, UnderlineStyle } from '@/style';
import { setLanguage } from '@/utils/redux/Actions';
import { Languages } from '@/utils/redux/Actions.types';

export const LanguageItem: FC <LanguageItemType> = ({ languageName, keyLang }) => {

	const dispatch = useDispatch();
	const [ checkMark, setCheckMark ] = useState<boolean>(false);

	const { activeLanguage, nameMode } = useSelector((state: any) => state.allReducer);

	const changeLang = (languageKey: Languages) => {
		dispatch(setLanguage(languageKey));
	};

	useEffect(() => {
		if (activeLanguage === keyLang) {
			setCheckMark(true);
		}
	}, []);

	return (
		<View style={LanugageItemStyles.container}>
			<TouchableOpacity
				onPress={() => changeLang(keyLang as Languages)}
				style={LanugageItemStyles.touchableContainer}
			>
				{
					checkMark ? <Image source={require('@/assets/icons/ic_check_mark.png')} style={LanugageItemStyles.checkImage} /> : null
				}
				<Text
					style={[
						LanugageItemStyles.languageText,
						{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
					]}
				>
					{languageName}
				</Text>
			</TouchableOpacity>
			<View style={UnderlineStyle.underline} />
		</View>
	);
};
