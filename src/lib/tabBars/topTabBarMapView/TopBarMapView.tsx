import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { TopBarStyles } from './TopBarMapView.styles';
import { BackgroundColor, Highlight, TextColor } from '@/style';

export const MapTopBar = ({ state, descriptors, navigation }: any) => {

	const { nameMode } = useSelector((state: any) => state.allReducer);

	return (
		<View
			style={[
				TopBarStyles.barContainer,
				{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light }
			]}
		>
			{state.routes
				.filter((route: any) => route.params.showInTopBar)
				.map((route, index) => {
					const { options } = descriptors[ route.key ];
					const label =
				options.title !== undefined
					? options.title
					: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate({ name: route.name, merge: true });
						}
					};

					return (
						<TouchableOpacity
							key={label}
							accessibilityRole="button"
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							style={[
								TopBarStyles.touchableContainer,
								{
									backgroundColor: isFocused ? Highlight.tealHighlight
										: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light
								}
							]}
						>
							<Text
								style={{
									color: isFocused ? TextColor.lightText
										: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
									fontSize: 18
								}}
							>
								{label}
							</Text>
						</TouchableOpacity>
					);
				})}
		</View>
	);
};
