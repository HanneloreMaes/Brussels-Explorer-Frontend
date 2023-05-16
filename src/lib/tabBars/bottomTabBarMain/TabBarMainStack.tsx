import React, { FC } from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

import { TabBarStyles } from './TabBarMain.styles';
import { Highlight } from '@/style';

export const MainStackTabBar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {

	const getRightIcon = (routeName: string, activeState: boolean) => {
		if (routeName === 'DashboardStack') {
			if (activeState) {
				return <Icon name='compass' size={30} color={Highlight.tealHighlight}/>;
			}
			return <Icon name='compass' size={30} color='black'/>;
		}
		if (routeName === 'Search') {
			if (activeState) {
				return <Icon name="list" size={30} color={Highlight.tealHighlight} />;
			}
			return <Icon name="list" size={30} color="black" />;
		}
		if (routeName === 'SettingStack') {
			if (activeState) {
				return <Icon name="settings" size={30} color={Highlight.tealHighlight} />;
			}
			return <Icon name="settings" size={30} color="black" />;
		}
	};

	return (
		<SafeAreaView edges={[ 'bottom', 'left', 'right' ]} style={TabBarStyles.safeContainer} >
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
