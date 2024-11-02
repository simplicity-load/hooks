import { createContext, useCallback, useContext, useState } from "react";

export type Language = keyof TranslationObject;
export type TranslationObject = {
  en: string;
  fr?: string;
  de?: string;
  it?: string;
  es?: string;
};
interface TranslationContextType {
  language: Language;
  t: (o: TranslationObject) => string;
  changeLanguage: (language: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

interface P {
  children: JSX.Element;
}

export const TranslationProvider = ({ children }: P) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = useCallback(
    (o: TranslationObject, replace?: string) => {
      const translated = o?.[language] || o?.["en"];
      if (replace) return translated.replaceAll("REPLACE", replace);
      return translated;
    },
    [language]
  );

  const changeLanguage = useCallback(
    (language: Language) => setLanguage(language),
    []
  );

  return (
    <TranslationContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used inside a TranslationProvider");
  }
  return context;
};
