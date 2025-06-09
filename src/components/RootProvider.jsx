import { AppContext } from "../hooks/useAppContext.js";
import { useThemeProvider } from "../hooks/useThemeProvider.js";
import { useLanguageProvider } from "../hooks/useLanguageProvider.js";

export default function RootProvider({ children }) {
  const { isDarkTheme, toggleTheme } = useThemeProvider();
  const { language, toggleLanguage, collections } = useLanguageProvider();

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        language,
        toggleLanguage,
        collections,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
