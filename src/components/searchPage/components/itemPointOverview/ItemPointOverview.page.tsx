import React, { FC } from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ItemPointOverviewStyles } from './ItemPointOverview.styles';
import { ItemPointTypes } from './ItemPointOverview.types';
import { Highlight, TextColor } from '@/style';

export const ItemPointOverview: FC <ItemPointTypes> = ({
	nameMode,
	item,
	navigation,
}) => {

	const getRightIcons = () => {
		if (item.type === 'StreetArt') {
			return (
				<View style={ItemPointOverviewStyles.infoTextContainer}>
					<Ionicons name='pencil' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							ItemPointOverviewStyles.textInfo,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{item.author}</Text>
				</View>
			);
		}
		if (item.type === 'Musea') {
			return (
				<View style={ItemPointOverviewStyles.infoTextContainer}>
					<FontAwesome5 name='building' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							ItemPointOverviewStyles.textInfo,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{item.author}</Text>
				</View>
			);
		}
		if (item.type === 'Monument') {
			return (
				<View style={ItemPointOverviewStyles.infoTextContainer}>
					<FontAwesome5 name='monument' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							ItemPointOverviewStyles.textInfo,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{item.author}</Text>
				</View>
			);
		}
		if (item.type === 'Forest-Square-Park') {
			return (
				<View style={ItemPointOverviewStyles.infoTextContainer}>
					<FontAwesome name='tree' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							ItemPointOverviewStyles.textInfo,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{item.author}</Text>
				</View>
			);
		}
		if (item.type === 'Other') {
			return (
				<View style={ItemPointOverviewStyles.infoTextContainer}>
					<Feather name='plus' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							ItemPointOverviewStyles.textInfo,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{item.author}</Text>
				</View>
			);
		}
		if (item.type === 'Shops') {
			return (
				<View style={ItemPointOverviewStyles.infoTextContainer}>
					<FontAwesome5 name='shopping-basket' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							ItemPointOverviewStyles.textInfo,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{item.author}</Text>
				</View>
			);
		}
		if (item.type === 'Bar-Food') {
			return (
				<View style={ItemPointOverviewStyles.infoTextContainer}>
					<FontAwesome name='cutlery' color={Highlight.tealHighlight} size={16} />
					<Text
						style={[
							ItemPointOverviewStyles.textInfo,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>{item.author}</Text>
				</View>
			);
		}
	};

	return (
		<View key={item._id}>
			<TouchableOpacity
				key={item._id}
				style={[
					ItemPointOverviewStyles.itemContainer,
					{ marginHorizontal: 0 }
				]}
				onPress={() => navigation.navigate('DetailPointPage', {
					titleScreen: item.name,
					dataOfCard: item,
					nameMode,
					navigation
				})}
			>
				<Image
					source={{ uri: item.imageUrl }}
					style={ItemPointOverviewStyles.image}
					resizeMode='cover' />
				<View style={ItemPointOverviewStyles.allInfoContainer}>
					<Text style={[ ItemPointOverviewStyles.textName, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.name}</Text>
					<View style={ItemPointOverviewStyles.infoContainer}>
						{getRightIcons()}
					</View>
					<View style={ItemPointOverviewStyles.infoContainer}>
						<View style={ItemPointOverviewStyles.infoTextContainer}>
							<Feather name='map-pin' color={Highlight.tealHighlight} size={16} />
							<Text style={[ ItemPointOverviewStyles.textInfo, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.address}</Text>
						</View>
					</View>
					<View style={ItemPointOverviewStyles.infoContainer}>
						<View style={ItemPointOverviewStyles.infoTextContainer}>
							<FontAwesome name='tag' color={Highlight.tealHighlight} size={16} />
							<Text style={[ ItemPointOverviewStyles.textInfo, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.type}</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
			<View style={ItemPointOverviewStyles.underline} />
		</View>
	);

};
