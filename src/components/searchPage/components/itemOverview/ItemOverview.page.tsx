import React, { FC } from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ItemTypes } from './ItemOverview.types';
import { SearchStyles } from '../../page/Search.styles';
import { Highlight, TextColor } from '@/style';

export const ItemOverview: FC <ItemTypes> = ({ nameMode, item, navigation }) => {

	return (
		<View key={item._id}>
			<TouchableOpacity
				key={item._id}
				style={SearchStyles.itemContainer}
				onPress={() => navigation.navigate('DetailPage', {
					titleScreen: item.name,
					dataOfCard: item,
					nameMode
				})}
			>
				<Image
					source={{ uri: item.imageUrl }}
					style={SearchStyles.image}
					resizeMode='cover' />
				<View style={{ marginLeft: 10 }}>
					<Text style={[ SearchStyles.textName, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.name}</Text>
					<View style={SearchStyles.infoContainer}>
						<View style={SearchStyles.infoTextContainer}>
							<Icon name='arrows-h' color={Highlight.tealHighlight} size={16} />
							<Text style={[ SearchStyles.textInfo, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.distance}</Text>
						</View>
						<View style={SearchStyles.infoTextContainer}>
							<Feather name='clock' color={Highlight.tealHighlight} size={16} />
							<Text style={[ SearchStyles.textInfo, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.time}</Text>
						</View>
						<View style={SearchStyles.infoTextContainer}>
							<Icon name='tag' color={Highlight.tealHighlight} size={16} />
							<Text style={[ SearchStyles.textInfo, { color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText } ]}>{item.theme}</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
			<View style={SearchStyles.underline} />
		</View>
	);

};
