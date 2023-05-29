import React, { FC } from 'react';

import { Pressable, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { SkipButtonType } from '../types/SkipButton.types';
import { ButtonStyles } from '@/style';
import { setUnAuth } from '@/utils/redux/Actions';

export const SkipButton: FC <SkipButtonType> = ({ navigation, routeName, nameButton }) => {

	const dispatch = useDispatch();

	return (
		<Pressable
			style={ButtonStyles.skipButtonContainer}
			onPress={() => {
				dispatch(setUnAuth(true));
				navigation.navigate(routeName);
			}}>
			<Text style={ButtonStyles.skipButtonText}>{nameButton}</Text>
		</Pressable>
	);
};
