import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { SettingStackParamList } from '../../../types';
import { SETTINGS_ROUTES } from '@/enums/routes';
import { BackgroundColor, Highlight, TextColor } from '@/style';
import '@/utils/i18n/i18n';

const SettingStack = createNativeStackNavigator<SettingStackParamList>();

export const SettingsStackScreen: FC = () => {

	const { i18n } = useTranslation();

	return (
		<SettingStack.Navigator
			initialRouteName='Settings'
			screenOptions={{
				headerTitleStyle: { color: TextColor.darkText },
				headerTintColor: Highlight.tealHighlight,
				contentStyle: {
					backgroundColor: BackgroundColor.light
				}
			}}
		>
			{SETTINGS_ROUTES.map((settingItem) => (
				<SettingStack.Screen
					key={settingItem.name as keyof SettingStackParamList}
					name={settingItem.name as keyof SettingStackParamList}
					component={settingItem.component}
					options={{
						title: i18n.t(`${settingItem.label}`) as string,
					}}
				/>
			))}
		</SettingStack.Navigator>
	);
};
