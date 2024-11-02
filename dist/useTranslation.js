"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = exports.TranslationProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TranslationContext = (0, react_1.createContext)(undefined);
const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = (0, react_1.useState)("en");
    const t = (0, react_1.useCallback)((o, replace) => {
        const translated = (o === null || o === void 0 ? void 0 : o[language]) || (o === null || o === void 0 ? void 0 : o["en"]);
        if (replace)
            return translated.replaceAll("REPLACE", replace);
        return translated;
    }, [language]);
    const changeLanguage = (0, react_1.useCallback)((language) => setLanguage(language), []);
    return ((0, jsx_runtime_1.jsx)(TranslationContext.Provider, { value: { language, t, changeLanguage }, children: children }));
};
exports.TranslationProvider = TranslationProvider;
const useTranslation = () => {
    const context = (0, react_1.useContext)(TranslationContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used inside a TranslationProvider");
    }
    return context;
};
exports.useTranslation = useTranslation;
