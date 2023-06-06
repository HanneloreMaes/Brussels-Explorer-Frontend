import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { LastStyles } from './LastSeen.styles';
import { LastSeenType } from '../types/LastSeen.types';
import { ItemOverview } from '@/components/searchPage/components';
import { TitleH2 } from '@/components/shared';
import { TextColor, TextStyles } from '@/style';
import '@/utils/i18n/i18n';

export const LastSeenSection: FC <LastSeenType> = ({ dataUnAuth, navigation }) => {

	const { i18n } = useTranslation();
	const { specRoute, nameMode } = useSelector((state: any) => state.allReducer);

	const [ noRecent, setNoRecent ] = useState<boolean>(false);

	const getSpecRouteFromId = () => {
		if (specRoute.length === 0) {
			setNoRecent(true);
		} else {
			setNoRecent(false);
		}
	};

	useEffect(() => {
		getSpecRouteFromId();
	}, []);

	return(
		<View style={LastStyles.container}>
			<TitleH2 labelTitle='dashboard_section_last_seen_title' prevComponent='Last' />
			{
				noRecent ? <Text
					style={[
						TextStyles.bodyText,
						{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
					]}
				>{i18n.t('dashboard_section_last_seen_not_found')}</Text> :
					(
						dataUnAuth === undefined ? (
							<ItemOverview
								key={specRoute.name}
								item={specRoute}
								nameMode={nameMode}
								navigation={navigation}
								prevPage='Last'
							/>
						) : (
							dataUnAuth.map((unAuth: any) => {
								return (
									<ItemOverview
										key={unAuth._id}
										item={unAuth}
										nameMode={nameMode}
										navigation={navigation}
										prevPage='Last'
									/>
								);
							})
						)
					)
			}
		</View>
	);
};
