import axios from 'axios';
import { Dispatch } from 'redux';

import { GET_POINTS, GET_ROUTES, Languages, SET_LANGUAGE } from './Actions.types';
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

export const setLanguage = (activeLanguage: Languages) => (dispatch: Dispatch) => {
	dispatch({
		type: SET_LANGUAGE,
		activeLanguage,
	});
};
