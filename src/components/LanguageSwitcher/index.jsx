import { useContext } from "react";
import { DropList } from "../DropList";
import { LocalizationContext } from "../../context";
import { AvailableLanguages } from "../../helpers/consts";

const attributeName = "data-language";

export const LanguageSwitcher = () => {
  const { localization, setLocalizationLanguage } =
    useContext(LocalizationContext);

  const items = localization.availableLanguages.map((lang) => {
    return {
      title: AvailableLanguages[lang].code,
      icon: AvailableLanguages[lang].icon,
      dataAttributes: { [attributeName]: lang },
    };
  });

  const onItemClickHandler = (e) => {
    setLocalizationLanguage(e.currentTarget.getAttribute(attributeName));
  };

  return (
    <div className="language-manager">
      <DropList
        items={items}
        selectedItemTitle={AvailableLanguages[localization.language].code}
        onItemClick={onItemClickHandler}
      />
    </div>
  );
};
