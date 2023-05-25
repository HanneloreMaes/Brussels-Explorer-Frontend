import React, { FC, useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import { SearchStyles } from './Search.styles';
import { ItemOverview, NotFoundText } from '../components';
import { LoadingSpinner } from '@/components/shared';
import { SearchNavProps } from '@/lib/navigator/types';
import { BackgroundColor, ButtonStyles, DefaultShadow, Highlight, TextColor, TextStyles, UnderlineStyle } from '@/style';
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

	const themesNames = [ 'Art', 'Food', 'Musea' ];
	const distanceNames = [ '5km', '10km', '14km', '15km' ];
	const timeNames = [ '30min', '50min', '1h', '2h' ];

	const { routes, nameMode } = useSelector((state: any) => state.allReducer);

	const fetchData = () => {
		dispatch(getRoutes());
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setFilteredData(
			routes.filter((route:any) => {
				return (
					(!theme || theme === route.theme) &&
					(!distance || distance === route.distance) &&
					(!time || time === route.time)
				);
			})
		);
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
						<>
							<View
								style={[
									SearchStyles.dropdownDataContainer,
									{
										backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light
									}
								]}
							>
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
										buttonStyle={SearchStyles.dropdown1BtnStyle}
										buttonTextStyle={SearchStyles.dropdown1BtnTxtStyle}
										renderDropdownIcon={isOpened => {
											return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color="#444" size={18} />;
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
										buttonStyle={SearchStyles.dropdown1BtnStyle}
										buttonTextStyle={SearchStyles.dropdown1BtnTxtStyle}
										renderDropdownIcon={isOpened => {
											return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color="#444" size={18} />;
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
										buttonStyle={SearchStyles.dropdown1BtnStyle}
										buttonTextStyle={SearchStyles.dropdown1BtnTxtStyle}
										renderDropdownIcon={isOpened => {
											return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color="#444" size={18} />;
										}}
									/>
								</View>
							</View>

							<View style={SearchStyles.buttonsContainer}>
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
							<View style={UnderlineStyle.underline} />
						</>
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
