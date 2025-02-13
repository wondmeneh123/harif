import React, { createContext, useState, useContext, ReactNode } from "react";
import translations, {
  Language,
  TranslationKeys,
} from "../utils/localizations";

interface LanguageContextProps {
  language: Language;
  switchLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("lang") as Language) || "en"
  );

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const t = (key: TranslationKeys): string =>
    translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
