import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEnglish from './locales/english.json';
import translationSpanish from './locales/spanish.json';
import translationFrench from './locales/french.json';
import translationGerman from './locales/german.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEnglish,
    },
    es: {
      translation: translationSpanish,
    },
    fr: {
      translation: translationFrench,
    },
    de: {
      translation: translationGerman,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;