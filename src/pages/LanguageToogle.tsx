import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (language: string) => {
    i18n.changeLanguage(language);

    console.log('dfasfaf');
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`${
          i18n.language === 'en' ? 'bg-blue-500' : 'bg-gray-300'
        } px-4 py-2 rounded focus:outline-none`}
        onClick={() => toggleLanguage('en')}
      >
        English
      </button>
      <button
        className={`${
          i18n.language === 'fr' ? 'bg-blue-500' : 'bg-gray-300'
        } px-4 py-2 rounded focus:outline-none`}
        onClick={() => toggleLanguage('fr')}
      >
        French
      </button>
      <button
        className={`${
          i18n.language === 'es' ? 'bg-blue-500' : 'bg-gray-300'
        } px-4 py-2 rounded focus:outline-none`}
        onClick={() => toggleLanguage('es')}
      >
        Spanish
      </button>
    </div>
  );
};

export default LanguageToggle;
