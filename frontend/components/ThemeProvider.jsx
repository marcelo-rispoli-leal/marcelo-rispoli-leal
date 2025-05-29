import { ThemeContext } from "../hooks/useThemeContext.js";
import { useThemeProvider } from "../hooks/useThemeProvider.js";
import { useLanguageProvider } from "../hooks/useLanguageProvider.js";

export function ThemeProvider({ children }) {
  const { isDarkTheme, toggleTheme } = useThemeProvider();
  const { language, changeLanguage } = useLanguageProvider();

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        language,
        changeLanguage,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
