import React, { FC, useEffect, useState } from 'react';

import CheckBox from '@react-native-community/checkbox';
import { Text, ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { SearchStyles } from './Search.styles';
import { ItemOverview, NotFoundText } from '../components';
import { LoadingSpinner } from '@/components/shared';
import { SearchNavProps } from '@/lib/navigator/types';
import { BackgroundColor, DefaultShadow, Highlight, TextColor, TextStyles } from '@/style';
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
	const [ nameOfEmptyArray, setNameOfEmptyArray ] = useState<any>([]);

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

			const namesOfEmpty: any = [];
			newData.map((data: any, index: number) => {
				const keyIndex = keyFilter[ index ];
				const indexOfDataArray = data[ index ];

				if (indexOfDataArray === undefined) {
					namesOfEmpty.push(keyIndex);
					return namesOfEmpty;
				}

			});
			setNameOfEmptyArray(namesOfEmpty);
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
		<ScrollView
			contentInsetAdjustmentBehavior='automatic'
		>
			<View
				style={{
					height: Dimensions.get('screen').height - 130,
				}}
			>
				<TouchableOpacity
					style={[
						SearchStyles.filterBtnContainer,
						DefaultShadow.shadowPrimary,
						{
							backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light
						}
					]}
					onPress={() => setIsOpen(!isOpen)}
				>
					<Text
						style={[
							TextStyles.bodyText,
							{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
						]}
					>Filter Menu</Text>
				</TouchableOpacity>
				{
					isOpen ? (
						<View
							style={[
								SearchStyles.filterContainer,
								{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light }
							]}
						>
							<Text
								style={[
									TextStyles.titleH2,
									SearchStyles.titleCategories,
									{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
								]}
							>Theme</Text>
							<View style={SearchStyles.filterCheckboxContainer}>
								<View style={SearchStyles.checkboxContainer}>
									<CheckBox
										value={state.Art}
										onValueChange={value =>
											setState({
												...state,
												Art: value,
											})
										}
									/>
									<Text
										style={[
											SearchStyles.checkbxoText,
											{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
										]}
									>Art</Text>
								</View>
								<View style={SearchStyles.checkboxContainer}>
									<CheckBox
										value={state.Food}
										onValueChange={value =>
											setState({
												...state,
												Food: value,
											})
										}
									/>
									<Text
										style={[
											SearchStyles.checkbxoText,
											{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
										]}
									>Food</Text>
								</View>
								<View style={SearchStyles.checkboxContainer}>
									<CheckBox
										value={state.Kunst}
										onValueChange={value =>
											setState({
												...state,
												Kunst: value,
											})
										}
									/>
									<Text
										style={[
											SearchStyles.checkbxoText,
											{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
										]}
									>Kunst</Text>
								</View>
								<View style={SearchStyles.checkboxContainer}>
									<CheckBox
										value={state.Musea}
										onValueChange={value =>
											setState({
												...state,
												Musea: value,
											})
										}
									/>
									<Text
										style={[
											SearchStyles.checkbxoText,
											{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
										]}
									>Musea</Text>
								</View>
							</View>
							<View style={SearchStyles.buttonContainer}>
								<TouchableOpacity
									style={SearchStyles.touchableBtnContainer}
									onPress={() => searchFilterFunction(state)}
								>
									<Text style={SearchStyles.touchableBtnText}>Save</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={SearchStyles.touchableBtnContainer}
									onPress={() => {
										setState({
											...initialState
										});
										setFilteredData(routes);
									}}
								>
									<Text style={SearchStyles.touchableBtnText}>Clear</Text>
								</TouchableOpacity>
							</View>
						</View>
					) : null
				}
				{
					isLoading ? (
						<View style={SearchStyles.loadingContainer}>
							<LoadingSpinner sizeSpinner="large" colorSpinner={Highlight.tealHighlight} />
						</View>
					) : (
						filteredData.length !== 0 ? (
							filteredData.map((item: any) => {
								return (
									item.length === 0 ? (
										nameOfEmptyArray.map((nameOfItem: string) => {
											return <NotFoundText key={nameOfItem} nameComponent={nameOfItem} />;
										})
									) : (
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
										) :
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
							nameOfEmptyArray.map((nameOfItem: string) => {
								return <NotFoundText key={nameOfItem} nameComponent={nameOfItem} />;
							})
						)
					)
				}

			</View>
		</ScrollView>
	);
};
