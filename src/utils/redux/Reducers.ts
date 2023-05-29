import {
	GET_POINTS,
	GET_ROUTES,
	GET_POINTS_SPEC_ROUTES,
	SET_LANGUAGE,
	SET_MODE_APP,
	GET_SPEC_ROUTES,
	SET_UN_AUTH_STACK,
} from './Actions.types';

const initialState = {
	points: [],
	routes: [],
	specRoute: [],
	pointsForSpecRoute: [],
	nameMode: null,
	unAuth: false,
	activeLanguage: null,
};

function allReducer(state = initialState, action: any) {
	switch (action.type) {
	case GET_POINTS:
		return { ...state, points: action.payload };
	case GET_ROUTES:
		return { ...state, routes: action.payload };
	case GET_SPEC_ROUTES:
		return { ...state, specRoute: action.payload };
	case GET_POINTS_SPEC_ROUTES:
		return { ...state, pointsForSpecRoute: action.payload };
	case SET_LANGUAGE:
		return { ...state, activeLanguage: action.activeLanguage };
	case SET_MODE_APP:
		return { ...state, nameMode: action.nameMode };
	case SET_UN_AUTH_STACK:
		return { ...state, unAuth: action.unAuth };
	default:
		return state;
	}
}

export default allReducer;
