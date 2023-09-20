import { useContext } from "react";
import { LocalizationContext } from "../../context";
import { AvailableLanguages } from "../../helpers/consts";

import "./LanguageSwitch.scss";

export const LanguageSwitch = () => {
  const { localization, setLocalizationLanguage } =
    useContext(LocalizationContext);

  const onButtonClickHandler = () => {
    const lang =
      localization.language === AvailableLanguages.ru.code
        ? AvailableLanguages.en.code
        : AvailableLanguages.ru.code;

    setLocalizationLanguage(lang);
  };

  return (
    <div className="language-switch">
      <button
        className={`language-switch__button ${
          localization.language !== AvailableLanguages.ru.code
            ? ""
            : " language-switch__button_disabled"
        }`}
        onClick={onButtonClickHandler}
      >
        {AvailableLanguages.en.text}
      </button>
      <button
        className={`language-switch__button ${
          localization.language === AvailableLanguages.ru.code
            ? ""
            : " language-switch__button_disabled"
        }`}
        onClick={onButtonClickHandler}
      >
        {AvailableLanguages.ru.text}
      </button>
    </div>
  );
};
