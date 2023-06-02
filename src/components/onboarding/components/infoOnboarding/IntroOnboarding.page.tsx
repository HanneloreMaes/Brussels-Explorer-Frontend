import React, { FC } from 'react';

import { View, Text, Dimensions } from 'react-native';
import { Svg, Image, Ellipse, ClipPath } from 'react-native-svg';
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';

import { IntroStyles } from './IntroOnboarding.styles';
import {
	BackgroundColor,
	DefaultAppStyling,
	SwiperColor,
	TextColor,
	TextStyles
} from '@/style';

const { width, height } = Dimensions.get('window');

export const IntroOnboaridng: FC = () => {

	const { nameMode } = useSelector((state: any) => state.allReducer);

	return (
		<View style={IntroStyles.container}>
			<Swiper
				style={{ backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light }}
				dot={
					<View
						style={[
							IntroStyles.dot,
							{ backgroundColor: nameMode === 'dark' ? SwiperColor.lightSwipe : SwiperColor.darkSwipe }
						]}
					/>
				}
				activeDot={
					<View
						style={[ IntroStyles.dot, { backgroundColor: SwiperColor.activeSwipe } ]}
					/>
				}
				paginationStyle={ IntroStyles.bottomPagina }
				loop={false}
			>
				<View style={IntroStyles.slideWrapper}>
					<Svg height={height / 1.55} width={width}>
						<ClipPath id='clipPathId'>
							<Ellipse
								cx={width / 2}
								cy="70"
								rx={height / 1.8}
								ry={height / 2}
							/>
						</ClipPath>
						<Image
							href={require('@/assets/images/swiper/museum_leger.jpg')}
							width={width}
							height={height / 1.5}
							preserveAspectRatio='xMidYMid slice'
							clipPath='url(#clipPathId)'
						/>
					</Svg>
					<View style={{ marginHorizontal: DefaultAppStyling.globalMargin }}>
						<Text style={IntroStyles.titleSlide1}>Welcome to Brussels Explorer!</Text>
						<Text
							style={[
								TextStyles.bodyText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>
							An app that takes you on a local, cultural journey through Brussels using routes.
							Different themes define the routes so there is something for everyone.
						</Text>
					</View>
				</View>
				<View style={IntroStyles.slideWrapper}>
					<Svg height={height / 1.55} width={width}>
						<ClipPath id='clipPathId'>
							<Ellipse
								cx={width / 2}
								cy="70"
								rx={height / 1.8}
								ry={height / 2}
							/>
						</ClipPath>
						<Image
							href={require('@/assets/images/swiper/park_happark.jpg')}
							width={width}
							height={height / 1.5}
							preserveAspectRatio='xMidYMid slice'
							clipPath='url(#clipPathId)' />
					</Svg>
					<View style={{ marginHorizontal: DefaultAppStyling.globalMargin }}>
						<Text style={IntroStyles.titleSlide1}>Feature: Map with routes</Text>
						<Text
							style={[
								TextStyles.bodyText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>
							In the app, there is a map provided where the different routes are shown.
							With the possibility to navigate to the details of the route.
							Viewing all points is also possible here.
						</Text>
					</View>
				</View>
				<View style={IntroStyles.slideWrapper}>
					<Svg height={height / 1.55} width={width}>
						<ClipPath id='clipPathId'>
							<Ellipse
								cx={width / 2}
								cy="70"
								rx={height / 1.8}
								ry={height / 2}
							/>
						</ClipPath>
						<Image
							href={require('@/assets/images/swiper/museum_experience.jpg')}
							width={width}
							height={height / 1.5}
							preserveAspectRatio='xMidYMid slice'
							clipPath='url(#clipPathId)' />
					</Svg>
					<View style={{ marginHorizontal: DefaultAppStyling.globalMargin }}>
						<Text style={IntroStyles.titleSlide1}>Feature: Filter routes</Text>
						<Text
							style={[
								TextStyles.bodyText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>
							Filtering all routes can be done according to 3 values: theme, distance and time.
							It may happen that there is no route that meets the requirements and
							removing the filters is easy.
						</Text>
					</View>
				</View>
				<View style={IntroStyles.slideWrapper}>
					<Svg height={height / 1.55} width={width}>
						<ClipPath id='clipPathId'>
							<Ellipse
								cx={width / 2}
								cy="70"
								rx={height / 1.8}
								ry={height / 2}
							/>
						</ClipPath>
						<Image
							href={require('@/assets/images/swiper/vaartkapoen.jpg')}
							width={width}
							height={height / 1.5}
							preserveAspectRatio='xMidYMid slice'
							clipPath='url(#clipPathId)' />
					</Svg>
					<View style={{ marginHorizontal: DefaultAppStyling.globalMargin }}>
						<Text style={IntroStyles.titleSlide1}>Feature: Change language</Text>
						<Text
							style={[
								TextStyles.bodyText,
								{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
							]}
						>
							To make the app accessible to many, there is the ability to customize your language.
							The languages English, Dutch, French and German are supported.
							It can be found at settings and then language
						</Text>
					</View>
				</View>
			</Swiper>
		</View>
	);
};
