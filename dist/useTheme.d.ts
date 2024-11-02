type Theme = Record<string, any>;
interface ThemeContextType {
    isDark: boolean;
    theme: Theme;
    toggleTheme: () => void;
}
interface P {
    darkTheme: Theme;
    lightTheme: Theme;
    children: JSX.Element;
}
export declare const ThemeProvider: ({ darkTheme, lightTheme, children }: P) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
