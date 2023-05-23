import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ModalErrorStyles } from './ModalError.styles';
import { ModalTypes } from './ModalError.types';
import { BackgroundColor, TextColor } from '@/style';
import '@/utils/i18n/i18n';

export const ModalError: FC<ModalTypes> = ({ labelName, labelTryAgainText }) => {

	const { i18n } = useTranslation();
	const { nameMode } = useSelector((state: any) => state.allReducer);

	return (
		<View style={[ ModalErrorStyles.container, { backgroundColor: nameMode === ' dark' ? BackgroundColor.dark : BackgroundColor.light } ]}>
			<Image source={require('@/assets/icons/ic_exlametion_mark.png')} style={ModalErrorStyles.imgExlametion} />
			<View>
				<Text style={[ ModalErrorStyles.textError, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{i18n.t(labelName)}</Text>
				{
					labelTryAgainText ? (
						<Text
							style={[
								ModalErrorStyles.textError,
								ModalErrorStyles.tryAgainText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>
							{i18n.t(labelTryAgainText)}
						</Text>
					) : null
				}
			</View>
			{/* <Text>{labelName}</Text> */}
		</View>
	);
};
