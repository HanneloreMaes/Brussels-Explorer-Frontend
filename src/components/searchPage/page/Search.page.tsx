import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, ScrollView, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import { SearchStyles } from './Search.styles';
import { NotFoundText } from '../components/notFound/notFound';
import { LoadingSpinner } from '@/components/shared';
import { SearchNavProps } from '@/lib/navigator/types';
import '@/utils/i18n/i18n';
import { Highlight } from '@/style';
import { getRoutes } from '@/utils/redux/Actions';

export const SearchPage: FC <SearchNavProps<'SearchPage'>> = ({ navigation, route }) => {

	const dispatch = useDispatch();
	const { i18n } = useTranslation();
	const [ isLoading, setIsLoading ] = useState<boolean>(true);

	const [ filteredData, setFilteredData ] = useState([]);

	const { routes } = useSelector((state: any) => state.allReducer);
	const fetchPoints = () => {
		dispatch(getRoutes());
		setIsLoading(false);
	};

	const searchFilterFunction = (text: string) => {
		if(text){
			const newData = routes.filter(( item : any) => {
				const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
				const textData = text.toUpperCase();

				return itemData.indexOf(textData) > -1;
			});
			setFilteredData(newData);
			setIsLoading(false);
		} else {
			setFilteredData(routes);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchPoints();
		setFilteredData(routes);
	}, []);

	useEffect(() => {
		navigation.setOptions({
			headerTitle: route.params?.titleScreen,
			headerSearchBarOptions: {
				placeholder: i18n.t('search_placeholder_searchBar') as string,
				onChangeText: (event: any) => {
					searchFilterFunction(event.nativeEvent.text);
				},
				hideWhenScrolling: false,
			}
		});
	}, [ navigation ]);

	return (
		<SafeAreaView>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
			>
				{
					isLoading ? (
						<View style={SearchStyles.loadingContainer}>
							<LoadingSpinner sizeSpinner="large" colorSpinner={Highlight.tealHighlight} />
						</View>
					) : (
						filteredData.length !== 0 ? (
							filteredData.map((item: any) => {
								return (
									<>
										<TouchableOpacity key={item._id} style={SearchStyles.itemContainer} onPress={() => navigation.navigate('DetailPage', { titleScreen: item.name, dataOfCard: item })}>
											<Image
												source={{ uri: item.imageUrl }}
												style={SearchStyles.image}
												resizeMode='cover' />
											<View style={{ marginLeft: 10 }}>
												<Text style={SearchStyles.textName}>{item.name}</Text>
												<View style={SearchStyles.infoContainer}>
													<View style={SearchStyles.infoTextContainer}>
														<Icon name='arrows-h' color={Highlight.tealHighlight} size={16} />
														<Text style={SearchStyles.textInfo}>{item.distance}</Text>
													</View>
													<View style={SearchStyles.infoTextContainer}>
														<Feather name='clock' color={Highlight.tealHighlight} size={16} />
														<Text style={SearchStyles.textInfo}>{item.time}</Text>
													</View>
													<View style={SearchStyles.infoTextContainer}>
														<Icon name='tag' color={Highlight.tealHighlight} size={16} />
														<Text style={SearchStyles.textInfo}>{item.theme}</Text>
													</View>
												</View>
											</View>
										</TouchableOpacity>
										<View style={SearchStyles.underline} />
									</>
								);
							})
						) : (
							<NotFoundText />
						)
					)
				}
			</ScrollView>
		</SafeAreaView>
	);
};
