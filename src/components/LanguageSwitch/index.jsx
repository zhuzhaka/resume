import { useContext } from 'react'
import styles from "./LangSwitch.module.scss"
import { LanguageContext } from '../../context'
import { AvailableLanguages } from '../../helpers/consts';

export const LanguageSwitch = () => {
  const { localization, setLocalization } = useContext(LanguageContext);
  
  const onButtonClick = () => {
    const lang = localization.language === AvailableLanguages.ru.code ? AvailableLanguages.en.code : AvailableLanguages.ru.code;
    setLocalization(lang);
  }

  return (
    <div className={styles.wrapper}>
			<button
        className={`${styles.button}${localization.language !== AvailableLanguages.ru.code ? '' : ' ' + styles.buttonDisabled}`}
        onClick={onButtonClick}
      >{AvailableLanguages.en.text}</button>
			<button
        className={`${styles.button}${localization.language === AvailableLanguages.ru.code ? '' : ' ' + styles.buttonDisabled}`}
        onClick={onButtonClick}
      >{AvailableLanguages.ru.text}</button>
		</div>
  );
}