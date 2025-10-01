import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  useEffect(() => {
    // Set document language attribute
    document.documentElement.lang = language;
    
    // Set appropriate font family based on language
    const fontFamilies: Record<Language, string> = {
      en: "'Times New Roman', 'Tinos', serif",
      hi: "'Noto Sans Devanagari', 'Times New Roman', serif",
      pa: "'Noto Sans Gurmukhi', 'Times New Roman', serif",
      bn: "'Noto Sans Bengali', 'Times New Roman', serif",
      ta: "'Noto Sans Tamil', 'Times New Roman', serif",
      te: "'Noto Sans Telugu', 'Times New Roman', serif",
    };
    
    document.documentElement.style.fontFamily = fontFamilies[language];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
