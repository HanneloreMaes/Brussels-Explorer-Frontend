import React, { FC } from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

import { TabBarStyles } from './TabBarMain.styles';
import { BackgroundColor, Highlight, TextColor } from '@/style';

export const MainStackTabBar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {

	const { nameMode } = useSelector((state: any) => state.allReducer);

	const getRightIcon = (routeName: string, activeState: boolean) => {
		if (routeName === 'DashboardStack') {
			if (activeState) {
				return <Icon name='compass' size={30} color={Highlight.tealHighlight}/>;
			}
			return <Icon name='compass' size={30} color={nameMode === 'light' ? TextColor.lightText : TextColor.darkText} />;
		}
		if (routeName === 'MapviewStack') {
			if (activeState) {
				return <Icon name="map" size={28} color={Highlight.tealHighlight} />;
			}
			return <Icon name="map" size={28} color={nameMode === 'light' ? TextColor.lightText : TextColor.darkText} />;
		}
		if (routeName === 'Search') {
			if (activeState) {
				return <Icon name="list" size={30} color={Highlight.tealHighlight} />;
			}
			return <Icon name="list" size={30} color={nameMode === 'light' ? TextColor.lightText : TextColor.darkText} />;
		}
		if (routeName === 'SettingStack') {
			if (activeState) {
				return <Icon name="settings" size={30} color={Highlight.tealHighlight} />;
			}
			return <Icon name="settings" size={30} color={nameMode === 'light' ? TextColor.lightText : TextColor.darkText} />;
		}
	};

	return (
		<SafeAreaView
			edges={[ 'bottom', 'left', 'right' ]}
			style={[
				TabBarStyles.safeContainer,
				{ backgroundColor: nameMode === 'light' ? BackgroundColor.headerBlack : BackgroundColor.light }
			]}
		>
			<View style={TabBarStyles.viewContainer}>
				{state.routes.map((route, index) => {
					const { options } = descriptors[ route.key ];

					const isActive = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!isActive && !event.defaultPrevented) {
							navigation.navigate({ name: route.name });
						}
					};

					return (
						<TouchableOpacity
							key={route.name}
							accessibilityRole="button"
							accessibilityState={isActive ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							style={{ padding: 5 }}
							onPress={onPress}
						>
							{getRightIcon(route.name, isActive)}
						</TouchableOpacity>
					);
				})}
			</View>
		</SafeAreaView>
	);
};
