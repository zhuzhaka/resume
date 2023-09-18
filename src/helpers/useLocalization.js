import { useCookies } from "react-cookie";
import { useState } from "react";
import { AvailableLanguages } from "./consts";

function getLocalizedText(lang, texts) {
  return texts && texts.find((item) => item.language.includes(lang));
}

export const useLocalization = (
  localizationJsonUrl = "",
  options = { language: "", cookieName: "", localizationTexts: null }
) => {
  const [cookies, setCookie] = useCookies();

  const lastLanguage =
    options.language ||
    cookies[options.cookieName] ||
    navigator.language.slice(0, 2);

  console.log(navigator.language.slice(0, 2));

  const [currentlanguage, _setLanguage] = useState(lastLanguage);
  const localizedTexts = getLocalizedText(lastLanguage, localizationJsonUrl);

  const setLocalization = (language) => {
    _setLanguage(language);

    if (options.cookieName) {
      setCookie(options.cookieName, language, { sameSite: "strict" });
    }
  };

  console.log(lastLanguage);
  console.log(
    localizedTexts ? localizedTexts.resume.links.github.text : "null"
  );

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
