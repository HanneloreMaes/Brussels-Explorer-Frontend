import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, ScrollView, View, Image, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { SearchStyles } from './Search.styles';
import { NotFoundText } from '../components/notFound/notFound';
import { LoadingSpinner } from '@/components/shared';
import { SearchNavProps } from '@/lib/navigator/types';
import '@/utils/i18n/i18n';
import { Highlight } from '@/style';
import { getPoints } from '@/utils/redux/Actions';

export const SearchPage: FC <SearchNavProps<'SearchPage'>> = ({ navigation, route }) => {

	const dispatch = useDispatch();
	const { i18n } = useTranslation();
	const [ isLoading, setIsLoading ] = useState<boolean>(true);

	const [ filteredData, setFilteredData ] = useState([]);

	const { points } = useSelector((state: any) => state.allReducer);
	const fetchPoints = () => {
		dispatch(getPoints());
		setIsLoading(false);
	};

	const searchFilterFunction = (text: string) => {
		if(text){
			const newData = points.filter(( item : any) => {
				const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
				const textData = text.toUpperCase();

				return itemData.indexOf(textData) > -1;
			});
			setFilteredData(newData);
			setIsLoading(false);
		} else {
			setFilteredData(points);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchPoints();
		setFilteredData(points);
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
									<View key={item._id} style={SearchStyles.itemContainer}>
										<Image
											source={{ uri: item.imageUrl }}
											style={SearchStyles.image}
											resizeMode='cover'
										/>
										<View>
											<Text style={SearchStyles.textName}>{item.name}</Text>
											<Text style={SearchStyles.textAddress}>{item.address}</Text>
										</View>
									</View>
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
