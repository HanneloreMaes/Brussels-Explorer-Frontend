import { Action } from 'redux';

export type Languages = 'nl' | 'en';

export interface RootAction extends Action {
	points?: any;
	routes?: any;
	activeLanguage?: Languages;
}

// GET-ROUTES => GETTING THE DATA
export const GET_POINTS = 'GET_POINTS';
export const GET_ROUTES = 'GET_ROUTES';
export const SET_LANGUAGE = 'SET_LANGUAGE';
