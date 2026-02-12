import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ko from './locales/ko.json';

// Detect user location using a free IP API
const detectUserLanguage = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    if (data.country_code === 'KR') {
      return 'ko';
    }
    return 'en';
  } catch (error) {
    console.warn('Location detection failed, defaulting to English', error);
    return 'en';
  }
};

// Initialize language (defaulting to EN first, will update via detection)
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ko: { translation: ko }
    },
    lng: 'en', // Default start language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React handles XSS automatically
    }
  });

// Run detection after init
detectUserLanguage().then((lang) => {
  if (lang !== i18n.language) {
    i18n.changeLanguage(lang);
  }
});

export default i18n;
