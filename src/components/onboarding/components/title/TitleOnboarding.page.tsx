import React from 'react';

import { Text, Image } from 'react-native';

import { OnboardingStyles } from '../../OnboardingScreen.styles';
import { TextColor } from '@/style';

export const TitleOnboarding = (nameMode: string) => {
	return (
		<>
			<Image source={require('@/assets/logo/ic_logo.png')} style={{ width: '30%', height: '20%' }} />
			<Text
				style={[
					OnboardingStyles.titleOnboarding,
					{
						color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
					}
				]}
			>Brussels Explorer</Text>
		</>
	);
};
