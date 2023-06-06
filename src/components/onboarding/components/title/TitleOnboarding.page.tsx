import React, { FC } from 'react';

import { View, Text, Image, Dimensions } from 'react-native';

import { TitleOnboardingType } from './TitleOnbaording.types';
import { OnboardingStyles } from '../../OnboardingScreen.styles';
import { TextColor } from '@/style';

const { width, height } = Dimensions.get('window');

export const TitleOnboarding: FC <TitleOnboardingType> = ({ nameMode }) => {
	return (
		<View style={{ zIndex: 1, alignItems: 'center' }}>
			<Image source={require('@/assets/logo/ic_logo.png')} style={{ width: width * 0.4, height: height * 0.21, marginBottom: 10, }} />
			<Text
				style={[
					OnboardingStyles.titleOnboarding,
					{
						color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
					}
				]}
			>Brussels Explorer</Text>
		</View>
	);
};
