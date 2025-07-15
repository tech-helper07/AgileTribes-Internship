import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, availableLanguages, translate } = useLanguage();

  const languageNames = {
    en: 'English',
    es: 'Español',
    fr: 'Français'
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>{translate('selectLanguage')}</h3>
      <p>{translate('currentLang')}: {languageNames[currentLanguage]}</p>
      <div>
        {availableLanguages.map(lang => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            style={{
              padding: '5px 10px',
              margin: '5px',
              backgroundColor: currentLanguage === lang ? '#007bff' : '#f0f0f0',
              color: currentLanguage === lang ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            {languageNames[lang]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;