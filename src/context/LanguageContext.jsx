import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

// Top 15 Most Spoken Languages (by total speakers worldwide)
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', region: 'United States' },           // 1.5B+ speakers
  { code: 'zh', name: '中文 (普通话)', flag: '🇨🇳', region: 'China' },              // 1.1B+ speakers
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', region: 'India' },                    // 600M+ speakers
  { code: 'es', name: 'Español', flag: '🇪🇸', region: 'Spain' },                   // 550M+ speakers
  { code: 'fr', name: 'Français', flag: '🇫🇷', region: 'France' },                 // 300M+ speakers
  { code: 'ar', name: 'العربية', flag: '🇸🇦', region: 'Saudi Arabia' },            // 300M+ speakers
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩', region: 'Bangladesh' },                // 270M+ speakers
  { code: 'pt', name: 'Português', flag: '🇧🇷', region: 'Brazil' },                // 260M+ speakers
  { code: 'ru', name: 'Русский', flag: '🇷🇺', region: 'Russia' },                  // 250M+ speakers
  { code: 'ja', name: '日本語', flag: '🇯🇵', region: 'Japan' },                    // 125M+ speakers
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', region: 'Germany' },                 // 100M+ speakers
  { code: 'ko', name: '한국어', flag: '🇰🇷', region: 'South Korea' },               // 80M+ speakers
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', region: 'Turkey' },                   // 80M+ speakers
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', region: 'Vietnam' },              // 85M+ speakers
  { code: 'it', name: 'Italiano', flag: '🇮🇹', region: 'Italy' },                  // 65M+ speakers
];

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Check localStorage for saved language preference
    const saved = localStorage.getItem('mattel-language');
    return saved || 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('mattel-language', currentLanguage);
    // Update document direction for RTL languages
    const rtlLanguages = ['ar', 'ur', 'fa'];
    document.documentElement.dir = rtlLanguages.includes(currentLanguage) ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const t = (key) => {
    // Get translation for current language, fallback to English
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback to English if translation not found
    if (value === undefined) {
      value = translations['en'];
      for (const k of keys) {
        value = value?.[k];
      }
    }
    
    return value || key;
  };

  const getCurrentLanguageInfo = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      setCurrentLanguage, 
      t, 
      languages,
      getCurrentLanguageInfo 
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

export default LanguageContext;

