import React, { FC } from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ItemOverviewStyles } from './ItemOverview.styles';
import { ItemTypes } from './ItemOverview.types';
import { DefaultAppStyling, Highlight, TextColor } from '@/style';

export const ItemOverview: FC <ItemTypes> = ({
	nameMode,
	item,
	navigation,
	prevPage,
}) => {

	return (
		<View key={item._id}>
			<TouchableOpacity
				key={item._id}
				style={[
					ItemOverviewStyles.itemContainer,
					{ marginHorizontal: prevPage === 'Last' ? 0 : DefaultAppStyling.globalMargin }
				]}
				onPress={() => navigation.navigate('DetailPage', {
					titleScreen: item.name,
					dataOfCard: item,
					nameMode,
					navigation
				})}
			>
				<Image
					source={{ uri: item.imageUrl }}
					style={ItemOverviewStyles.image}
					resizeMode='cover' />
				<View style={{ marginLeft: 10 }}>
					<Text style={[ ItemOverviewStyles.textName, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.name}</Text>
					<View style={ItemOverviewStyles.infoContainer}>
						<View style={ItemOverviewStyles.infoTextContainer}>
							<Icon name='arrows-h' color={Highlight.tealHighlight} size={16} />
							<Text style={[ ItemOverviewStyles.textInfo, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.distance}</Text>
						</View>
						<View style={ItemOverviewStyles.infoTextContainer}>
							<Feather name='clock' color={Highlight.tealHighlight} size={16} />
							<Text style={[ ItemOverviewStyles.textInfo, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.time}</Text>
						</View>
						<View style={ItemOverviewStyles.infoTextContainer}>
							<Feather name='map-pin' color={Highlight.tealHighlight} size={16} />
							<Text style={[ ItemOverviewStyles.textInfo, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.area}</Text>
						</View>
					</View>
					<View style={ItemOverviewStyles.infoTextContainer}>
						<Icon name='tag' color={Highlight.tealHighlight} size={16} />
						<Text style={[ ItemOverviewStyles.textInfo, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.theme}</Text>
					</View>
				</View>
			</TouchableOpacity>
			<View style={ItemOverviewStyles.underline} />
		</View>
	);

};
