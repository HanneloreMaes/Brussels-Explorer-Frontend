/* eslint-disable react/destructuring-assignment */
import React, { FC } from 'react';

import { Image, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { FirebaseStyles } from './FirebaseModal.styles';
import { BackgroundColor, TabBarColor, TextColor } from '@/style';
import i18n from '@/utils/i18n/i18n';

export const FirebaseModal: FC = (props: any) => (
	<View
		style={[
			FirebaseStyles.container,
			{ backgroundColor: props.nameMode === 'dark' ? TabBarColor.darkModus : BackgroundColor.light }
		]}
	>
		<FontAwesome
			name='close'
			color={ props.nameMode === 'dark' ? TextColor.lightGrayText : TextColor.grayText }
			size={30}
			onPress={() => props.handleCloseModal(false)}
			style={FirebaseStyles.closeButtonIcon}
		/>
		<Image source={require('@/assets/icons/ic_exlametion_mark.png')} style={FirebaseStyles.imgExlametion} />
		<View>
			<Text
				style={[
					FirebaseStyles.textError,
					{
						color: props.nameMode === 'dark' ? TextColor.lightText : TextColor.darkText
					}
				]}
			>{i18n.t(props.labelName)}</Text>
		</View>
	</View>
);
