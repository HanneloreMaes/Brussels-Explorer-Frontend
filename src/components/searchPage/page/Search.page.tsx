import React, { FC, useEffect, useState } from 'react';

import CheckBox from '@react-native-community/checkbox';
import { Text, ScrollView, View, SafeAreaView, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { SearchStyles } from './Search.styles';
import { ItemOverview, NotFoundText } from '../components';
import { LoadingSpinner } from '@/components/shared';
import { SearchNavProps } from '@/lib/navigator/types';
import { Highlight } from '@/style';
import { getRoutes } from '@/utils/redux/Actions';

const initialState = {
	Art: false,
	Food: false,
	Kunst: false,
	Musea: false,
};

export const SearchPage: FC <SearchNavProps<'SearchPage'>> = ({ navigation, route }) => {

	const dispatch = useDispatch();
	const [ isLoading, setIsLoading ] = useState<boolean>(true);

	const [ isOpen, setIsOpen ] = useState<boolean>(false);
	const [ state, setState ] = useState(initialState);

	const [ filteredData, setFilteredData ] = useState<any>([]);
	const { routes, nameMode } = useSelector((state: any) => state.allReducer);
	const fetchData = () => {
		dispatch(getRoutes());
		setIsLoading(false);
	};

	const searchFilterFunction = (text: any) => {
		if(text){

			const keyValue = Object.entries(text).map(([ key, value ]) => {
				return value && key;
			});
			const keyFilter = keyValue.filter(Boolean);
			const newData = keyFilter.map((valueOfKey: any) => {
				const newData = routes.filter((item: any) => {
					const itemData = item.theme ? item.theme.toUpperCase() : ''.toUpperCase();
					const stateData = valueOfKey.toUpperCase();

					return itemData.indexOf(stateData) > -1;
				});
				return newData;
			});

			setFilteredData(newData);
			setIsLoading(false);

		} else {
			setFilteredData(routes);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
		setFilteredData(routes);
	}, []);

	useEffect(() => {
		navigation.setOptions({
			headerTitle: route.params?.titleScreen,
		});
	}, [ navigation ]);

	return (
		<SafeAreaView>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
			>
				<View>
					<TouchableOpacity onPress={() => setIsOpen(true)}>
						<Text>Filter Menu</Text>
					</TouchableOpacity>
					{
						isOpen ? (
							<View>
								<View style={styles.container}>
									<View style={styles.checkboxWrapper}>
										<CheckBox
											value={state.Art}
											onValueChange={value =>
												setState({
													...state,
													Art: value,
												})
											}
										/>
										<Text>Art</Text>
									</View>
									<View style={styles.checkboxWrapper}>
										<CheckBox
											value={state.Food}
											onValueChange={value =>
												setState({
													...state,
													Food: value,
												})
											}
										/>
										<Text>Food</Text>
									</View>
									<View style={styles.checkboxWrapper}>
										<CheckBox
											value={state.Kunst}
											onValueChange={value =>
												setState({
													...state,
													Kunst: value,
												})
											}
										/>
										<Text>Kunst</Text>
									</View>
									<View style={styles.checkboxWrapper}>
										<CheckBox
											value={state.Musea}
											onValueChange={value =>
												setState({
													...state,
													Musea: value,
												})
											}
										/>
										<Text>Musea</Text>
									</View>
								</View>
								<Button
									onPress={() => searchFilterFunction(state)}
									title="Submit"
								/>
								<Button
									onPress={() => {
										setState({
											...initialState
										});
										setFilteredData(routes);
									}}
									title="Clear"
								/>
							</View>
						) : null
					}
				</View>
				{
					isLoading ? (
						<View style={SearchStyles.loadingContainer}>
							<LoadingSpinner sizeSpinner="large" colorSpinner={Highlight.tealHighlight} />
						</View>
					) : (
						filteredData.length !== 0 ? (
							filteredData.map((item: any) => {
								return (
									item.length > 0 ? (
										item.map((itemArray: any) => {
											return (
												<ItemOverview
													key={itemArray._id}
													item={itemArray}
													nameMode={nameMode}
													navigation={navigation}
												/>
											);
										})
									) : (
										<ItemOverview
											key={item._id}
											item={item}
											nameMode={nameMode}
											navigation={navigation}
										/>
									)
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

const styles = StyleSheet.create({
	textInput: {
	  borderColor: 'gray',
	  borderWidth: 1,
	},
	resultContainer: {
	  flexDirection: 'row',
	  padding: 10,
	},
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
	checkboxWrapper: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  paddingVertical: 5,
	},
});
