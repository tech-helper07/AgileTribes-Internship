import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TranslatedText = () => {
  const { translate } = useLanguage();

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', margin: '10px' }}>
      <h3>{translate('welcome')}! 👋</h3>
      <p>{translate('hello')}, {translate('thankYou')} for using our app!</p>
      <p>{translate('goodbye')} for now!</p>
    </div>
  );
};

export default TranslatedText;