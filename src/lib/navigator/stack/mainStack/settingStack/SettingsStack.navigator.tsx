import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { SettingStackParamList } from '../../../types';
import { SETTINGS_ROUTES } from '@/enums/routes';
import { BackgroundColor, Highlight, TextColor } from '@/style';
import '@/utils/i18n/i18n';

const SettingStack = createNativeStackNavigator<SettingStackParamList>();

export const SettingsStackScreen: FC = () => {

	const { i18n } = useTranslation();
	const { nameMode } = useSelector((state: any) => state.allReducer);

	return (
		<SettingStack.Navigator
			initialRouteName='Settings'
			screenOptions={{
				headerTitleStyle: {
					color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
					fontFamily: 'ExpletusSans-Regular',
				},
				headerTintColor: nameMode === 'dark' ? Highlight.lightHighlight : Highlight.tealHighlight,
				headerStyle: {
					backgroundColor: nameMode === 'dark' ? BackgroundColor.headerBlack : BackgroundColor.light,
				},
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
