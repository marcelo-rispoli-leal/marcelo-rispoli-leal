// language.js
// Get preferred languages from browser settings
const userLanguages = navigator.languages || [navigator.language];
// Look for preferred languages (pt, en, es) or their variants
const preferredLanguages = ["pt", "en", "es"];
// Default to English if none of the preferred languages are found
let selectedLanguage = "en";
// Check for preferred language or variant
for (const lang of userLanguages) {
  const [baseLang] = lang.split("-");
  if (preferredLanguages.includes(baseLang)) {
    selectedLanguage = baseLang;
    break;
  }
}
// Store the selected language in localStorage
localStorage.setItem("language", selectedLanguage);
