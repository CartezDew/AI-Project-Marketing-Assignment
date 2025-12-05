import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', region: 'United States' },
  { code: 'zh', name: '中文 (普通话)', flag: '🇨🇳', region: 'China' },
  { code: 'es', name: 'Español', flag: '🇪🇸', region: 'Spain' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', region: 'India' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', region: 'Saudi Arabia' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', region: 'France' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩', region: 'Bangladesh' },
  { code: 'pt', name: 'Português', flag: '🇧🇷', region: 'Brazil' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', region: 'Russia' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', region: 'Japan' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', region: 'Germany' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', region: 'South Korea' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', region: 'Turkey' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', region: 'Vietnam' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', region: 'Italy' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭', region: 'Thailand' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱', region: 'Poland' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦', region: 'Ukraine' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩', region: 'Indonesia' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪', region: 'Kenya' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰', region: 'Pakistan' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷', region: 'Iran' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳', region: 'Tamil Nadu' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳', region: 'Andhra Pradesh' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳', region: 'Maharashtra' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳', region: 'Gujarat' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳', region: 'Punjab' },
  { code: 'tl', name: 'Tagalog', flag: '🇵🇭', region: 'Philippines' },
  { code: 'yo', name: 'Yorùbá', flag: '🇳🇬', region: 'Nigeria' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬', region: 'Nigeria' },
  { code: 'ha', name: 'Hausa', flag: '🇳🇬', region: 'Nigeria' },
  { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼', region: 'Rwanda' },
  { code: 'am', name: 'አማርኛ', flag: '🇪🇹', region: 'Ethiopia' },
  { code: 'om', name: 'Oromoo', flag: '🇪🇹', region: 'Ethiopia' },
  { code: 'so', name: 'Soomaali', flag: '🇸🇴', region: 'Somalia' },
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

