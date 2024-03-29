/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import transNl from '../../assets/translations/dutch/Dutch.json';
import transEn from '../../assets/translations/english/English.json';
import transFr from '../../assets/translations/french/French.json';
import transDe from '../../assets/translations/german/German.json';

const resources = {
	en: {
		translation: transEn,
	},
	nl: {
		translation: transNl,
	},
	fr: {
		translation: transFr,
	},
	de: {
		translation: transDe,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	fallbackLng: 'en',
	compatibilityJSON: 'v3',
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
