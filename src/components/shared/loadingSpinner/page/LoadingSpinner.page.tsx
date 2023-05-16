import React, { FC } from 'react';

import { ActivityIndicator, View } from 'react-native';

import { SpinnerTypes } from '../types/LoadingSpinner.types';
import { SpinnerStyles } from './LoadingSpinner.styles';
import { Highlight } from '@/style';

export const LoadingSpinner: FC <SpinnerTypes> = ({ sizeSpinner }) => (
	<View style={SpinnerStyles.indicatorWrapper}>
		<ActivityIndicator size={sizeSpinner} color={Highlight.tealHighlight} />
	</View>
);
