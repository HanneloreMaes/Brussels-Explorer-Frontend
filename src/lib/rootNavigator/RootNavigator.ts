import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params?: object) => {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name, params);
	}
};

export const goBack = () => {
	if (navigationRef.isReady()) {
		navigationRef.current?.goBack();
	}
};
