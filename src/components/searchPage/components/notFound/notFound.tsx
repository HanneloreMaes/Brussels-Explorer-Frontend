import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { notFoundTypes } from './NotFound.types';
import { DefaultAppStyling, TextColor, TextStyles } from '@/style';
import '@/utils/i18n/i18n';

export const NotFoundText: FC<notFoundTypes> = ({ nameComponent, distance, time }) => {

	const { i18n } = useTranslation();
	const { nameMode } = useSelector( (state: any) => state.allReducer );

	return (
		<View style={{ alignItems: 'center', marginVertical: DefaultAppStyling.globalMargin, marginHorizontal: DefaultAppStyling.globalMargin }}>
			{
				nameComponent && !distance && !time ?
					<Text
						style={[
							TextStyles.titleH3,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>
						{i18n.t('search_route_theme_notFound')} {nameComponent} {i18n.t('search_notFound')}
					</Text> : null
			}
			{
				distance && !nameComponent && !time ?
					<Text
						style={[
							TextStyles.titleH3,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>
						{i18n.t('search_route_distance_notFound')} {distance} {i18n.t('search_notFound')}
					</Text> : null
			}
			{
				time && !nameComponent && !distance ?
					<Text
						style={[
							TextStyles.titleH3,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>
						{i18n.t('search_route_time_notFound')} {time} {i18n.t('search_notFound')}
					</Text> : null
			}
			{
				nameComponent && distance && !time ?
					<Text
						style={[
							TextStyles.titleH3,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>
						{i18n.t('search_route_theme_notFound')} {nameComponent} {i18n.t('search_route_and_notFound')} {i18n.t('search_route_distance_notFound').toLowerCase()} {distance} {i18n.t('search_notFound')}
					</Text> : null
			}
			{
				nameComponent && !distance && time ?
					<Text
						style={[
							TextStyles.titleH3,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>
						{i18n.t('search_route_theme_notFound')} {nameComponent} {i18n.t('search_route_and_notFound')} {i18n.t('search_route_time_notFound').toLowerCase()} {time} {i18n.t('search_notFound')}
					</Text> : null
			}
			{
				!nameComponent && distance && time ?
					<Text
						style={[
							TextStyles.titleH3,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>
						{i18n.t('search_route_distance_notFound')} {distance} {i18n.t('search_route_and_notFound')} {i18n.t('search_route_time_notFound').toLowerCase()} {time} {i18n.t('search_notFound')}
					</Text> : null
			}
			{
				nameComponent && distance && time ?
					<Text
						style={[
							TextStyles.titleH3,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>
						{i18n.t('search_route_theme_notFound')} {nameComponent} {i18n.t('search_route_and_notFound')} {i18n.t('search_route_distance_notFound').toLowerCase()} {distance} {i18n.t('search_route_and_notFound')} {i18n.t('search_route_time_notFound').toLowerCase()} {time} {i18n.t('search_notFound')}
					</Text> : null
			}
		</View>
	);
};
