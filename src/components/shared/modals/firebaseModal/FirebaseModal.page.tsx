/* eslint-disable react/destructuring-assignment */
import React, { FC } from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { FirebaseStyles } from './FirebaseModal.styles';
import { BackgroundColor, Highlight, TabBarColor, TextColor } from '@/style';
import i18n from '@/utils/i18n/i18n';

export const FirebaseModal = (props: any) => (
	<>
		<TouchableOpacity
			style={[
				FirebaseStyles.opacityBackground,
				{
					backgroundColor: props.nameMode === 'dark' ? Highlight.grayHighlight : BackgroundColor.opacityGray
				}
			]}
			onPress={() => props.handleCloseModal(false)}
		/>
		<View
			style={[
				FirebaseStyles.container,
				{ backgroundColor: props.nameMode === 'dark' ? TabBarColor.darkModus : BackgroundColor.light }
			]}
		>
			<AntDesign
				name='close'
				color={ props.nameMode === 'dark' ? TextColor.lightGrayText : TextColor.grayText }
				size={20}
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
				>{i18n.t(props.labelName)} {props.labelName === 'settings_alert_change_name_succes' ? props.newUsernameOfUser : null}</Text>
			</View>
		</View>
	</>
);
