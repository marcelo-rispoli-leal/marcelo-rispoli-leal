import { useState, useEffect } from "react";

export function useLanguageProvider() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "en";
  });

  const [sections, setSections] = useState(null);

  useEffect(() => {
    localStorage.setItem("language", language);

    // Load JSON data based on selected language
    import(`../locales/${language}.json`)
      .then((module) => {
        setSections(module.default.sections);
      })
      .catch((error) => {
        console.error("Error loading locale data:", error);
      });
  }, [language]);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return { language, toggleLanguage, sections };
}
