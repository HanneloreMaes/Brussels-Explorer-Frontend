import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';

import { HeaderStyles } from './Header.styles';
import { TextStyles } from '@/style';
import { auth } from '@/utils/Firebase.config';
import '@/utils/i18n/i18n';

export const Header: FC = () => {

	const { i18n } = useTranslation();

	const [ nameUser, setNameUser ] = useState<string>('');

	const [ timeOfDay, setTimeOfDay ] = useState<string>('');

	const getNameUser = () => {
		if (auth.currentUser?.displayName === undefined){
			setNameUser(auth.currentUser?.email as string);
		} else {
			setNameUser(auth.currentUser?.displayName as string);
		}
	};

	const getRightLabel = () => {
		const newDateUser = new Date();
		const timeDateUserString = newDateUser.toTimeString();

		const morningEndTime = '11:00:00';
		const middayTime = '14:00:00';
		const afternoonTime = '18:00:00';
		const eveningTime = '23:00:00';
		const nightTime = '06:00:00';

		if (timeDateUserString > nightTime && timeDateUserString < morningEndTime) {
			return setTimeOfDay('dashboard_heading_morning');
		}
		if (timeDateUserString > morningEndTime && timeDateUserString < middayTime) {
			return setTimeOfDay('dashboard_heading_midday');
		}
		if (timeDateUserString > middayTime && timeDateUserString < afternoonTime) {
			return setTimeOfDay('dashboard_heading_afternoon');
		}
		if (timeDateUserString > afternoonTime && timeDateUserString < eveningTime) {
			return setTimeOfDay('dashboard_heading_evening');
		}
		if (timeDateUserString > eveningTime && timeDateUserString < nightTime) {
			return setTimeOfDay('dashboard_heading_night');
		}
	};

	useEffect(() => {
		getRightLabel();
		getNameUser();
	}, []);

	return(
		<View style={HeaderStyles.container}>
			<Image source={require('../../../../assets/images/header_Img.jpg')} style={HeaderStyles.headerImage} />
			<View style={HeaderStyles.headerContainer}>
				<Text style={[ TextStyles.titleH2, { fontSize: 30 } ]}>{i18n.t(timeOfDay)}, </Text>
				<Text style={[ TextStyles.titleH2, { fontSize: 25 } ]}>{nameUser}</Text>
			</View>
		</View>
	);
};
