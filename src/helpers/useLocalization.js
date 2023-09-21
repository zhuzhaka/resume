import { useState } from "react";

function getLocalizedText(text, lang) {
  return text && text.length > 0
    ? text.find((item) => item.language.includes(lang))
    : null;
}

function getAvailableLanguages(text) {
  return text && text.length > 0 ? text.map((item) => item.language) : [];
}

function setLocalStorage(itemName, item) {
  if (itemName) {
    localStorage.setItem(itemName, item);
  }
}

export const useLocalization = (
  localizationJson = "",
  options = { language: "", localStorageName: "" }
) => {
  const lastLanguage =
    options.language ||
    localStorage.getItem(options.localStorageName) ||
    navigator.language.slice(0, 2);

  const [_language, _setLanguage] = useState(lastLanguage);

  // console.log(localizationJson)

  const availableLanguages = getAvailableLanguages(localizationJson);
  const localizedTexts = getLocalizedText(localizationJson, lastLanguage);

  const setLocalizationLanguage = (language) => {
    _setLanguage(language);
    setLocalStorage(options.localStorageName, language);
  };

  return localizedTexts
    ? [
        {
          language: _language,
          availableLanguages,
          localizedTexts,
        },
        setLocalizationLanguage,
      ]
    : [null];
};
