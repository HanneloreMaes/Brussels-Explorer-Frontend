import React, { FC, useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import { SearchStyles } from './Search.styles';
import { ItemOverview, NotFoundText } from '../components';
import { LoadingSpinner } from '@/components/shared';
import { SearchNavProps } from '@/lib/navigator/types';
import { BackgroundColor, ButtonStyles, DefaultShadow, Highlight, TextColor, TextStyles } from '@/style';
import { getRoutes } from '@/utils/redux/Actions';
import '@/utils/i18n/i18n';

export const SearchPage: FC <SearchNavProps<'SearchPage'>> = ({ navigation }) => {

	const dispatch = useDispatch();
	const { i18n } = useTranslation();

	const [ isLoading, setIsLoading ] = useState<boolean>(true);
	const [ isOpen, setIsOpen ] = useState<boolean>(false);

	const themeDropDownRef = useRef<SelectDropdown>(null);
	const distanceDropDownRef = useRef<SelectDropdown>(null);
	const timeDropDownRef = useRef<SelectDropdown>(null);

	const [ filteredData, setFilteredData ] = useState<any>([]);
	const [ theme, setTheme ] = useState<any>();
	const [ distance, setDistance ] = useState<any>();
	const [ time, setTime ] = useState<any>();

	const themesNames = [ 'StreetArt', 'Monument', 'Shops', 'Other', 'Musea' ];
	const distanceNames = [ '2km', '4km', '11km', '15km' ];
	const timeNames = [ '20min', '43min', '47min', '135min' ];

	const { routes, nameMode, unAuth } = useSelector((state: any) => state.allReducer);
	const slicedRoute = routes.slice(0, 2);

	const fetchData = () => {
		dispatch(getRoutes());
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (unAuth === true) {
			setFilteredData(
				slicedRoute.filter((route:any) => {
					return (
						(!theme || theme === route.theme)
					);
				})
			);
		} else {
			setFilteredData(
				routes.filter((route:any) => {
					return (
						(!theme || theme === route.theme) &&
						(!distance || distance === route.distance) &&
						(!time || time === route.time)
					);
				})
			);
		}
	}, [ distance, theme, time ]);

	return (
		<ScrollView
			contentInsetAdjustmentBehavior='automatic'
		>
			<View>
				<TouchableOpacity
					style={[
						SearchStyles.filterBtnContainer,
						DefaultShadow.shadowPrimary,
						{
							shadowColor: nameMode === 'dark' ? Highlight.lightHighlight : Highlight.darkHighlight,
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
					>{i18n.t('search_filter_menu_title')}</Text>
				</TouchableOpacity>
				{
					isOpen ? (
						<View style={{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light, zIndex: 6 }}>
							<View
								style={[
									SearchStyles.dropdownDataContainer,
									{

										height: unAuth === true ? '35%' : Dimensions.get('window').height / 5,
									}
								]}
							>
								{
									unAuth === true ? (
										<View style={SearchStyles.dropdownContainer}>
											<Text
												style={[
													TextStyles.titleH3,
													SearchStyles.titleCategories,
													{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
												]}
											>{i18n.t('search_default_title_theme')}:</Text>
											<SelectDropdown
												data={themesNames}
												ref={themeDropDownRef}
												onSelect={(selectedItem, index) => {
													setTheme(selectedItem);
												}}
												buttonTextAfterSelection={(selectedItem) => {
													return selectedItem;
												}}
												rowTextForSelection={(item) => {
													return item;
												}}
												defaultButtonText={i18n.t('search_default_theme') as string}
												buttonStyle={[
													SearchStyles.dropBtnStyle,
													{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light }
												]}
												buttonTextStyle={[
													SearchStyles.dropBtnTxtStyle,
													{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
												]}
												dropdownStyle={SearchStyles.dropStyle}
												rowStyle={{
													backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
													borderBottomColor: nameMode === 'dark' ? BackgroundColor.light : BackgroundColor.dark
												}}
												rowTextStyle={[
													SearchStyles.dropRowTxtStyle,
													{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
												]}
												renderDropdownIcon={isOpened => {
													return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={ nameMode === 'dark' ? TextColor.smokeText : TextColor.grayText } size={18} />;
												}}
											/>
										</View>

									) : (
										<>
											<View style={SearchStyles.dropdownContainer}>
												<Text
													style={[
														TextStyles.titleH3,
														SearchStyles.titleCategories,
														{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
													]}
												>{i18n.t('search_default_title_theme')}:</Text>
												<SelectDropdown
													data={themesNames}
													ref={themeDropDownRef}
													onSelect={(selectedItem, index) => {
														setTheme(selectedItem);
													}}
													buttonTextAfterSelection={(selectedItem) => {
														return selectedItem;
													}}
													rowTextForSelection={(item) => {
														return item;
													}}
													defaultButtonText={i18n.t('search_default_theme') as string}
													buttonStyle={[
														SearchStyles.dropBtnStyle,
														{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light }
													]}
													buttonTextStyle={[
														SearchStyles.dropBtnTxtStyle,
														{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
													]}
													dropdownStyle={SearchStyles.dropStyle}
													rowStyle={{
														backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
														borderBottomColor: nameMode === 'dark' ? BackgroundColor.light : BackgroundColor.dark
													}}
													rowTextStyle={[
														SearchStyles.dropRowTxtStyle,
														{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
													]}
													renderDropdownIcon={isOpened => {
														return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={ nameMode === 'dark' ? TextColor.smokeText : TextColor.grayText } size={18} />;
													}}
												/>
											</View>
											<View style={SearchStyles.dropdownContainer}>
												<Text
													style={[
														TextStyles.titleH3,
														SearchStyles.titleCategories,
														{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
													]}
												>{i18n.t('search_default_title_distance')}:</Text>
												<SelectDropdown
													data={distanceNames}
													ref={distanceDropDownRef}
													onSelect={(selectedItem, index) => {
														setDistance(selectedItem);
													}}
													buttonTextAfterSelection={(selectedItem) => {
														return selectedItem;
													}}
													rowTextForSelection={(item) => {
														return item;
													}}
													defaultButtonText={i18n.t('search_default_distance') as string}
													buttonStyle={[
														SearchStyles.dropBtnStyle,
														{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light }
													]}
													buttonTextStyle={[
														SearchStyles.dropBtnTxtStyle,
														{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
													]}
													dropdownStyle={SearchStyles.dropStyle}
													rowStyle={{
														backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
														borderBottomColor: nameMode === 'dark' ? BackgroundColor.light : BackgroundColor.dark
													}}
													rowTextStyle={[
														SearchStyles.dropRowTxtStyle,
														{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
													]}
													renderDropdownIcon={isOpened => {
														return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={ nameMode === 'dark' ? TextColor.smokeText : TextColor.grayText } size={18} />;
													}}
												/>
											</View>
											<View style={SearchStyles.dropdownContainer}>
												<Text
													style={[
														TextStyles.titleH3,
														SearchStyles.titleCategories,
														{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
													]}
												>{i18n.t('search_default_title_time')}:</Text>
												<SelectDropdown
													data={timeNames}
													ref={timeDropDownRef}
													onSelect={(selectedItem, index) => {
														setTime(selectedItem);
													}}
													buttonTextAfterSelection={(selectedItem) => {
														return selectedItem;
													}}
													rowTextForSelection={(item) => {
														return item;
													}}
													defaultButtonText={i18n.t('search_default_time') as string}
													buttonStyle={[
														SearchStyles.dropBtnStyle,
														{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light }
													]}
													buttonTextStyle={[
														SearchStyles.dropBtnTxtStyle,
														{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
													]}
													dropdownStyle={SearchStyles.dropStyle}
													rowStyle={{
														backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
														borderBottomColor: nameMode === 'dark' ? BackgroundColor.light : BackgroundColor.dark
													}}
													rowTextStyle={[
														SearchStyles.dropRowTxtStyle,
														{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
													]}
													renderDropdownIcon={isOpened => {
														return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={ nameMode === 'dark' ? TextColor.smokeText : TextColor.grayText } size={18} />;
													}}
												/>
											</View>
										</>

									)
								}

							</View>

							<View
								style={[
									SearchStyles.buttonsContainer,
									{ height: '10%' }
								]}
							>
								<TouchableOpacity
									style={[
										ButtonStyles.buttonContainerPrimary,
										{ width: '35%' }
									]}
									onPress={() => {
										setDistance(0);
										setTheme(0);
										themeDropDownRef.current?.reset();
										distanceDropDownRef.current?.reset();
										timeDropDownRef.current?.reset();
									}}
								>
									<Text style={ButtonStyles.buttonTextPrimary}>Clear filters</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={[
										ButtonStyles.buttonContainerPrimary,
										{ width: '30%' }
									]}
									onPress={() => setIsOpen(false)}
								>
									<Text style={ButtonStyles.buttonTextPrimary}>Close</Text>
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
									<ItemOverview
										key={item._id}
										item={item}
										nameMode={nameMode}
										navigation={navigation}
									/>
								);
							})
						) : <NotFoundText nameComponent={theme} distance={distance} time={time} />
					)
				}

			</View>
		</ScrollView>
	);
};
