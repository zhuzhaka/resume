import { useContext } from 'react'
import "./LanguageSwitch.scss"
import { LanguageContext } from '../../context'
import { AvailableLanguages } from '../../helpers/consts';

export const LanguageSwitch = () => {
  const { localization, setLocalization } = useContext(LanguageContext);
  
  const onButtonClick = () => {
    const lang = localization.language === AvailableLanguages.ru.code ? AvailableLanguages.en.code : AvailableLanguages.ru.code;
    setLocalization(lang);
  }

  return (
    <div className="language-switch">
			<button
        className={`language-switch__button ${localization.language !== AvailableLanguages.ru.code ? '' : ' language-switch__button_disabled'}`}
        onClick={onButtonClick}
      >{AvailableLanguages.en.text}</button>
			<button
        className={`language-switch__button ${localization.language === AvailableLanguages.ru.code ? '' : ' language-switch__button_disabled'}`}
        onClick={onButtonClick}
      >{AvailableLanguages.ru.text}</button>
		</div>
  );
}