import React, { FC } from 'react';

import { Pressable, Text } from 'react-native';

import { SkipButtonType } from '../types/SkipButton.types';
import { ButtonStyles } from '@/style';

export const SkipButton: FC <SkipButtonType> = ({ navigation, routeName, nameButton }) => (
	<Pressable style={ButtonStyles.skipButtonContainer} onPress={() => navigation.navigate(routeName)}>
		<Text style={ButtonStyles.skipButtonText}>{nameButton}</Text>
	</Pressable>
);
