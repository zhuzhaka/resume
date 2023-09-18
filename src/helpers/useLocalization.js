import { useCookies } from "react-cookie";
import { useState } from "react";

function getLocalizedText(lang, texts) {
  return texts && texts.find((item) => item.language === lang);
}

export const useLocalization = (
  localizationJsonUrl = "",
  options = { language: "", cookieName: "", localizationTexts: null }
) => {
  const [cookies, setCookie] = useCookies();

  const lastLanguage =
    options.language ||
    cookies[options.cookieName] ||
    navigator.language ||
    "en-US";

  const [currentlanguage, _setLanguage] = useState(lastLanguage);
  const localizedTexts = getLocalizedText(lastLanguage, localizationJsonUrl);

  const setLocalization = (language) => {
    _setLanguage(language);

    if (options.cookieName) {
      setCookie(options.cookieName, language, { sameSite: "strict" });
    }
  };

  return localizedTexts
    ? [
        {
          language: currentlanguage,
          localizedTexts,
        },
        setLocalization,
      ]
    : [null];
};
