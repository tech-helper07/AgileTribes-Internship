import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    welcome: 'Welcome',
    goodbye: 'Goodbye',
    hello: 'Hello',
    language: 'Language',
    switchTo: 'Switch to',
    currentLang: 'Current Language',
    thankYou: 'Thank you',
    selectLanguage: 'Select Language'
  },
  es: {
    welcome: 'Bienvenido',
    goodbye: 'Adiós',
    hello: 'Hola',
    language: 'Idioma',
    switchTo: 'Cambiar a',
    currentLang: 'Idioma Actual',
    thankYou: 'Gracias',
    selectLanguage: 'Seleccionar Idioma'
  },
  fr: {
    welcome: 'Bienvenue',
    goodbye: 'Au revoir',
    hello: 'Bonjour',
    language: 'Langue',
    switchTo: 'Changer vers',
    currentLang: 'Langue Actuelle',
    thankYou: 'Merci',
    selectLanguage: 'Sélectionner la Langue'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const translate = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      translate, 
      changeLanguage,
      availableLanguages: Object.keys(translations)
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};