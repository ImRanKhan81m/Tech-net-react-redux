// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcomeMessage: 'Welcome to My Website',
      sampleText: 'This is a sample Next.js project with language toggle buttons.',
    },
  },
  fr: {
    translation: {
      welcomeMessage: 'Bienvenue sur mon site',
      sampleText: 'Ceci est un projet Next.js de démonstration avec des boutons de bascule de langue.',
    },
  },
  es: {
    translation: {
      welcomeMessage: 'Bienvenido a mi sitio web',
      sampleText: 'Este es un proyecto de Next.js de muestra con botones de cambio de idioma.',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
