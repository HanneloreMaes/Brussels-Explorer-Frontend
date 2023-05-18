import { GET_POINTS, GET_ROUTES, GET_POINTS_SPEC_ROUTES, SET_LANGUAGE } from './Actions.types';

const initialState = {
	points: [],
	routes: [],
	pointsForSpecRoute: [],
	activeLanguage: null,
};

function allReducer(state = initialState, action: any) {
	switch (action.type) {
	case GET_POINTS:
		return { ...state, points: action.payload };
	case GET_ROUTES:
		return { ...state, routes: action.payload };
	case GET_POINTS_SPEC_ROUTES:
		return { ...state, pointsForSpecRoute: action.payload };
	case SET_LANGUAGE:
		return { ...state, activeLanguage: action.activeLanguage };
	default:
		return state;
	}
}

export default allReducer;
