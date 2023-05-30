/* eslint-disable no-console */
import axios from 'axios';
import { Dispatch } from 'redux';

import {
	GET_POINTS,
	GET_ROUTES,
	GET_SPEC_ROUTES,
	GET_POINTS_SPEC_ROUTES,
	SET_MODE_APP,
	SET_LANGUAGE,
	Languages,
	ModeOptions,
	SET_UN_AUTH_STACK,
	SET_PREFERENCES,
} from './Actions.types';
import { baseUrl } from '@/config';

/* eslint-disable no-unreachable */
export const getPoints = () => {
	try {
		return async (dispatch: any) => {
			const response = await axios.get(`${baseUrl}/allPoints`);
			if (response.data) {
				dispatch({
					type: GET_POINTS,
					payload: response.data
				});
			} else {
				console.warn('Unable to fetch points data!');
			}
		};
	} catch (error: any) {
		console.warn('ERROR getPoints', error.message);
	}
};

export const getRoutes = () => {
	try {
		return async (dispatch: any) => {
			const response = await axios.get(`${baseUrl}/allRoutes`);
			if (response.data) {
				dispatch({
					type: GET_ROUTES,
					payload: response.data
				});
			} else {
				console.warn('Unable to fetch routes data!');
			}
		};
	} catch (error: any) {
		console.warn('ERROR getRoutes', error.message);
	}
};

export const getSpecRoute = (routeId: string) => {
	try {
		return async (dispatch: any) => {
			const response = await axios.get(`${baseUrl}/route/${routeId}`);
			if (response.data) {
				dispatch({
					type: GET_SPEC_ROUTES,
					payload: response.data
				});
			} else {
				console.warn('Unable to fetch specific route!');
			}
		};
	} catch (error: any) {
		console.warn('ERROR getSpecRoute', error.message);
	}
};

export const getPointsFromSpecRoutes = (routeId: string) => {
	try {
		return async (dispatch: any) => {
			const response = await axios.get(`${baseUrl}/route/point/${routeId}`);
			if (response.data) {
				dispatch({
					type: GET_POINTS_SPEC_ROUTES,
					payload: response.data
				});
			} else {
				console.warn('Unable to fetch points from specific route!');
			}
		};
	} catch (error: any) {
		console.warn('ERROR getPointsFromSpecRoutes', error.message);
	}
};

export const setLanguage = (activeLanguage: Languages) => (dispatch: Dispatch) => {
	dispatch({
		type: SET_LANGUAGE,
		activeLanguage,
	});
};

export const setMode = (nameMode: ModeOptions) => (dispatch: Dispatch) => {
	dispatch({
		type: SET_MODE_APP,
		nameMode,
	});
};

export const setUnAuth = (unAuth: boolean) => (dispatch: Dispatch) => {
	dispatch({
		type: SET_UN_AUTH_STACK,
		unAuth,
	});
};

export const setPreferences = (preferences: Array<string>) => (dispatch: Dispatch) => {
	dispatch({
		type: SET_PREFERENCES,
		preferences,
	});
};
