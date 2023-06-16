import React, { FC } from 'react';

import { ActivityIndicator, View } from 'react-native';

import { SpinnerStyles } from './LoadingSpinner.styles';
import { SpinnerTypes } from '../types/LoadingSpinner.types';
import { BackgroundColor, Highlight } from '@/style';

export const LoadingSpinner: FC <SpinnerTypes> = ({ sizeSpinner, colorSpinner }) => (
	<View style={SpinnerStyles.indicatorWrapper}>
		<ActivityIndicator size={sizeSpinner} color={colorSpinner === 'light' ? BackgroundColor.light : Highlight.tealHighlight } />
	</View>
);
