import { useState, useEffect } from "react";

export function useLanguageProvider() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "en";
  });

  const [collections, setCollections] = useState(null);

  useEffect(() => {
    localStorage.setItem("language", language);

    // Load JSON data based on selected language
    import(`../locales/${language}.json`)
      .then((module) => {
        setCollections(module.default.collections);
      })
      .catch((error) => {
        console.error("Error loading locale data:", error);
      });
  }, [language]);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return { language, toggleLanguage, collections };
}
