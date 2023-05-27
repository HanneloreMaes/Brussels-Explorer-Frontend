import {
	GET_POINTS,
	GET_ROUTES,
	GET_POINTS_SPEC_ROUTES,
	SET_LANGUAGE,
	SET_MODE_APP,
	SET_LAST_SEEN,
	GET_SPEC_ROUTES,
} from './Actions.types';

const initialState = {
	points: [],
	routes: [],
	specRoute: [],
	pointsForSpecRoute: [],
	lastSeen: null,
	nameMode: null,
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
	case SET_LAST_SEEN:
		return { ...state, lastSeen: action.lastSeen };
	default:
		return state;
	}
}

export default allReducer;
