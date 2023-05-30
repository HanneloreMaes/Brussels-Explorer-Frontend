/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FC, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import {
	View,
	Dimensions,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	Alert,
	TouchableOpacity,
	Platform,
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback
} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay } from 'react-native-reanimated';
import { Svg, Image, Ellipse, ClipPath } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';

import { OnboardingStyles } from './OnboardingScreen.styles';
import { SkipButton } from '@/components/shared';
import { OnboardingNavProps } from '@/lib/navigator/types';
import { BackgroundColor, ButtonStyles, DefaultAppStyling, Highlight, TextColor } from '@/style';
import { auth } from '@/utils/Firebase.config';
import '@/utils/i18n/i18n';
import { setUnAuth } from '@/utils/redux/Actions';

export const OnboardingScreen: FC <OnboardingNavProps<'OnboardingScreen'>> = ({ navigation }) => {

	const dispatch = useDispatch();
	const { i18n } = useTranslation();
	const { nameMode } = useSelector((state: any) => state.allReducer);

	// ANIMATED VIEWS LOGIC START
	// -----------------------------------------------------------------------------------------------------------
	const { height, width } = Dimensions.get('screen');
	const imagePosition = useSharedValue(1);
	const [ isRegister, setIsRegister ] = useState(false);

	const IS_IOS_HEIGHT = -height / 1.8;
	const IS_ANDROID_HEIGHT = -height / 2;

	const animatedImageStyle = useAnimatedStyle(() => {
		const inteprolation = interpolate(imagePosition.value, [ 0, 1 ], [ Platform.OS === 'ios' ? IS_IOS_HEIGHT : IS_ANDROID_HEIGHT, 0 ]);
		return {
			transform: [ {
				translateY: withTiming(inteprolation, { duration: 1000 })
			} ]
		};
	});

	const animatedButtonStyle = useAnimatedStyle(() => {
		const interpolation = interpolate(imagePosition.value, [ 0, 1 ], [ 250, 0 ]);
		return {
			opacity: withTiming(imagePosition.value, { duration: 500 }),
			transform: [ {
				translateY: withTiming(interpolation, { duration: 1000 })
			} ]
		};
	});

	const animatedCloseButtonStyle = useAnimatedStyle(() => {
		return {
			opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 })
		};
	});

	const animatedFormStyle = useAnimatedStyle(() => {
		return {
			opacity: imagePosition.value === 0
				? withDelay(400, withTiming(1, { duration: 800 }))
				: withTiming(0 , { duration: 300 })
		};
	});

	const loginHandler = () =>{
		imagePosition.value = 0;
		dispatch(setUnAuth(false));
		if (isRegister) {
			setIsRegister(false);
		}
	};

	const registerHandler = () =>{
		imagePosition.value = 0;
		dispatch(setUnAuth(false));
		if (!isRegister) {
			setIsRegister(true);
		}
	};
	// ANIMATED VIEWS LOGIC END
	// -----------------------------------------------------------------------------------------------------------

	// FIREBASE LOGIC START
	// -----------------------------------------------------------------------------------------------------------
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ username, setUsername ] = useState('');

	const signUp = () => {
		createUserWithEmailAndPassword(auth,email, password)
			.then(() => {
				updateProfile(auth?.currentUser, {
					displayName: username,
				});
				dispatch(setUnAuth(false));
				navigation.navigate('QuestionRegister');
			}).catch( error => Alert.alert(error.message));
	};

	const loginUser = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => dispatch(setUnAuth(false)))
			.catch((error) => Alert.alert(error.message));
	};

	const forgotPassword = () => {
		sendPasswordResetEmail(auth, email)
			.then(() => Alert.alert('Email to reset password is send.'))
			.catch((error: any) => Alert.alert(error.message));
	};

	useEffect(() => {
		const unSubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(setUnAuth(false));
				navigation.navigate('MainStack');
			}
		});
		return unSubscribe;
	}, []);
	// FIREBASE LOGIC END
	// -----------------------------------------------------------------------------------------------------------

	return(
		<KeyboardAvoidingView
			style={[
				OnboardingStyles.container,
				{ backgroundColor: nameMode === 'dark' ? '' : BackgroundColor.light }
			]}
		>
			<View
				style={OnboardingStyles.titleContainer}
			>
				<Text
					style={[
						OnboardingStyles.titleOnboarding,
						{
							color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
							backgroundColor: nameMode === 'dark' ? null : BackgroundColor.onboardingLight
						}
					]}
				>Brussels Explorer</Text>
			</View>
			<Animated.View style={[ StyleSheet.absoluteFill, animatedImageStyle, { zIndex: -2 } ]}>
				<Svg height={height + 50} width={width}>
					<ClipPath id='clipPathId'>
						<Ellipse
							cx={width / 2}
							rx={height}
							ry={height + 50}
						/>
					</ClipPath>
					<Image
						href={nameMode === 'dark' ? require('@/assets/images/darkModus/login_background.jpg') : require('@/assets/images/lightModus/login_background.jpg')}
						width={nameMode === 'dark' ? width : width + 100}
						height={height + 100}
						preserveAspectRatio='xMidYMid slice'
						clipPath='url(#clipPathId)' />
				</Svg>
				<Animated.View
					style={[
						OnboardingStyles.closeBtnContainer,
						animatedCloseButtonStyle,
						{
							backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
							shadowColor: nameMode === 'dark' ? Highlight.lightHighlight : Highlight.darkHighlight,
						}
					]}
				>
					<TouchableOpacity
						onPress={() => { imagePosition.value = 1; } }
						style={OnboardingStyles.touchableXContainer}>
						<Text style= {{ color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }}>X</Text>
					</TouchableOpacity>
				</Animated.View>
			</Animated.View>
			<View style={OnboardingStyles.buttonContainer}>
				<Animated.View style={animatedButtonStyle}>
					<Pressable style={ButtonStyles.buttonContainerPrimary} onPress={loginHandler}>
						<Text style={ButtonStyles.buttonTextPrimary}>{i18n.t('onboarding_login_button')}</Text>
					</Pressable>
				</Animated.View>
				<Animated.View style={animatedButtonStyle}>
					<Pressable style={ButtonStyles.buttonContainerPrimary} onPress={registerHandler}>
						<Text style={ButtonStyles.buttonTextPrimary}>{i18n.t('onboarding_register_button')}</Text>
					</Pressable>
				</Animated.View>
				<Animated.View style={animatedButtonStyle}>
					<SkipButton
						navigation={navigation}
						routeName='MainStack'
						nameButton={i18n.t('onboarding_skip_button')}
					/>
				</Animated.View>
				<Animated.View style={[
					OnboardingStyles.formInputContainer,
					animatedFormStyle,
					StyleSheet.absoluteFill,
					{
						height: isRegister ? 300 : 250,
						marginTop: isRegister ? -62 : -15
					}
				]}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={{ paddingTop: isRegister ? 15 : 50, marginBottom: isRegister ? 20 : 30 }}>
							{isRegister && (
								<TextInput
									placeholder={i18n.t('onboarding_placeholder_name') as string | undefined}
									placeholderTextColor={ nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
									autoCapitalize="none"
									textContentType="name"
									value={username}
									onChangeText={(text) => setUsername(text)}
									style={[
										OnboardingStyles.textInput,
										{
											backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
											color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
										}
									]}
								/>
							)}
							<TextInput
								placeholder={i18n.t('onboarding_placeholder_email') as string | undefined}
								placeholderTextColor={ nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
								autoCapitalize="none"
								keyboardType="email-address"
								textContentType="emailAddress"
								value={email}
								onChangeText={(text) => setEmail(text)}
								style={[
									OnboardingStyles.textInput,
									{
										backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
										color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText
									}
								]}
							/>
							<TextInput
								placeholder={i18n.t('onboarding_placeholder_password') as string | undefined}
								secureTextEntry
								placeholderTextColor={ nameMode === 'dark' ? TextColor.lightText : TextColor.darkText }
								autoCapitalize="none"
								autoCorrect={false}
								textContentType="password"
								value={password}
								onChangeText={(text) => setPassword(text)}
								style={[
									OnboardingStyles.textInput,
									{
										backgroundColor: nameMode === 'dark' ? BackgroundColor.dark : BackgroundColor.light,
										color: nameMode === 'dark' ? TextColor.lightText : TextColor.darkText,
									}
								]}
							/>
							{
								!isRegister ? (
									<TouchableOpacity
										onPress={forgotPassword}
										style={OnboardingStyles.forgotBtn}
									>
										<Text style={OnboardingStyles.forgotText}>{i18n.t('onboarding_forgot_password')}</Text>
									</TouchableOpacity>
								) : null
							}
							{isRegister ? (
								<TouchableOpacity
									style={[
										OnboardingStyles.formButton,
										{ shadowColor: nameMode === 'dark' ? Highlight.lightHighlight : Highlight.darkHighlight }
									]}
									onPress={signUp}
								>
									<Text style={ButtonStyles.buttonTextPrimary}>{i18n.t('onboarding_register_button')}</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={[
										OnboardingStyles.formButton,
										{ shadowColor: nameMode === 'dark' ? Highlight.lightHighlight : Highlight.darkHighlight }
									]}
									onPress={loginUser}
								>
									<Text style={ButtonStyles.buttonTextPrimary}>{i18n.t('onboarding_login_button')}</Text>
								</TouchableOpacity>
							)}
						</View>
					</TouchableWithoutFeedback>
				</Animated.View>
			</View>
		</KeyboardAvoidingView>
	);
};
