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
interface P {
    children: JSX.Element;
}
export declare const TranslationProvider: ({ children }: P) => import("react/jsx-runtime").JSX.Element;
export declare const useTranslation: () => TranslationContextType;
export {};
