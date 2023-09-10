import { useCookies } from "react-cookie";
import { useState } from "react";

function getLocalizedText(lang, texts) {
  return texts && texts.find(item => item.language === lang);
}

export const useLocalization = (
  language = '',
  options = { cookieName: '', localizationTexts: null }
) => {
  const [cookies, setCookie] = useCookies();  
  const lastLanguage = language || cookies[options.cookieName] || navigator.language;
  
  const [currentlanguage, _setLanguage] = useState(lastLanguage);
  const [localizedTexts, _setLocalizedText] = useState(getLocalizedText(lastLanguage, options.localizationTexts));  

  const setLocalization = (language) => {
    _setLanguage(language);
    
    if (options.cookieName) {
      setCookie(options.cookieName, language, { sameSite: 'strict'});
    }

    if (options.localizationTexts) {
      _setLocalizedText(getLocalizedText(language, options.localizationTexts));
    }
  }

  return [{ language: currentlanguage, localizedTexts }, setLocalization];
}