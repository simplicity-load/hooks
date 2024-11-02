"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ThemeContext = (0, react_1.createContext)(undefined);
const ThemeProvider = ({ darkTheme, lightTheme, children }) => {
    const [isDark, setIsDark] = (0, react_1.useState)(false);
    const theme = isDark ? darkTheme : lightTheme;
    const toggleTheme = () => setIsDark((prev) => !prev);
    return ((0, jsx_runtime_1.jsx)(ThemeContext.Provider, { value: { isDark, theme, toggleTheme }, children: children }));
};
exports.ThemeProvider = ThemeProvider;
const useTheme = () => {
    const context = (0, react_1.useContext)(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
exports.useTheme = useTheme;
