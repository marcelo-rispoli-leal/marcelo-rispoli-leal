import { useState, useEffect } from "react";

export function useLanguageProvider() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "pt";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (lang) => setLanguage(lang);

  return { language, changeLanguage };
}
