import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Translations } from '../locales/translations';

interface LanguageContextType {
  language: 'zh' | 'en';
  t: Translations;
  setLanguage: (lang: 'zh' | 'en') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const value: LanguageContextType = {
    language,
    t: translations[language],
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 