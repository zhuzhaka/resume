import { useState } from "react";

function getLocalizedText(lang, texts) {
  return texts && texts.find((item) => item.language.includes(lang));
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
  const localizedTexts = getLocalizedText(lastLanguage, localizationJson);

  const setLocalStorage = (language) => {
    if (options.localStorageName) {
      localStorage.setItem(options.localStorageName, language);
    }
  };

  const setLocalizationLanguage = (language) => {
    _setLanguage(language);
    setLocalStorage(language);
  };

  return localizedTexts
    ? [
        {
          language: _language,
          localizedTexts,
        },
        setLocalizationLanguage,
      ]
    : [null];
};
