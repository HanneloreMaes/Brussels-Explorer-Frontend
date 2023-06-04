import React, { FC } from 'react';

import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { DescriptionTypes } from './DescriptionDetail.types';
import { DetailMap } from '../detailMap/DetailMap';
import { TextStyles, TextColor } from '@/style';

export const DescriptionDetail: FC <DescriptionTypes> = ({ props }) => {

	const { nameMode } = useSelector((state: any) => state.allReducer);

	return (
		<>
			<Text
				style={[
					TextStyles.bodyText,
					{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
				]}
			>
				{props.description}
			</Text>
			<DetailMap dataRoute={props} />
		</>
	);
};
