import { useContext } from "react";
import { LocalizationContext } from "../../context";

import { Logo } from "../../components/Logo";
import { InfoList } from "../../components/InfoList";
import { ResumeBlock } from "../../components/ResumeBlock";
import { LanguageSwitch } from "../../components/LanguageSwitch";

import "./MainPage.scss";

export const MainPage = () => {
  const { localization } = useContext(LocalizationContext);
  console.log(localization);
  console.log(localization.localizedTexts);
  // console.log(localization.localizedTexts.resume);

  return (
    <main className="main-page">
      <div className="main-page__language-switch">
        <LanguageSwitch />
      </div>
      <div className="main-page__wrapper main-page_resume slide-left">
        <div className="main-page__content">
          <div className="main-page__language-switch">
            <LanguageSwitch />
          </div>
          <ResumeBlock resumeData={localization.localizedTexts.resume} />
        </div>
      </div>
      <div className="main-page__wrapper main-page_additional">
        <div className="main-page__content">
          <div className="main-page__logo">
            <h3>Provided by</h3>
            <Logo />
          </div>
        </div>
      </div>
    </main>
  );
};
