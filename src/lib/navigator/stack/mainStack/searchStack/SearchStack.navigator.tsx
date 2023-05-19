import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { SearchPageParamList } from '../../../types';
import { SEARCH_ROUTES } from '@/enums/routes';
import '@/utils/i18n/i18n';
import { TextColor, Highlight, BackgroundColor } from '@/style';

const SearchStack = createNativeStackNavigator<SearchPageParamList>();

export const SearchStackScreen: FC = () => {

	const { i18n } = useTranslation();

	return(
		<SearchStack.Navigator
			screenOptions={{
				headerTitleStyle: { color: TextColor.darkText },
				headerTintColor: Highlight.tealHighlight,
				contentStyle: {
					backgroundColor: BackgroundColor.light
				}
			}}
		>
			{ SEARCH_ROUTES.map((searchItem) => (
				<SearchStack.Screen
					key={searchItem.label}
					name={searchItem.name as keyof SearchPageParamList}
					component={searchItem.component}
					options={({ route }) => ({
						title: route.params?.titleScreen || i18n.t(`${searchItem.label}`) as string,
					})}
				/>
			))}
		</SearchStack.Navigator>
	);

};
