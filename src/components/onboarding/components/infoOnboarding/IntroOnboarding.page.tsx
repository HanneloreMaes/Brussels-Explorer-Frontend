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
						<Text style={IntroStyles.titleSlide1}>Welcome to Brussels Epxlorer!</Text>
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
					<Text>Hellow</Text>
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
					<Text>Hellow</Text>
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
					<Text>Hellow</Text>
				</View>
			</Swiper>
		</View>
	);
};
