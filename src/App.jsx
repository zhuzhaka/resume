import { useEffect, useState } from "react";
import { LanguageContext } from "./context";
import { useLocalization } from "./helpers/useLocalization";
import { MainPage } from "./pages/MainPage";

import "./style.css"
import "./scss/app.scss"

import _localizations from './localization.json'

function App() {
	const [localization, setLocalization] = useLocalization('', {
		cookieName: 'pageLanguage', localizationTexts: _localizations
	});

  return (
		<LanguageContext.Provider value={{localization, setLocalization}}>
			<MainPage />
		</LanguageContext.Provider>
  );
}

export default App;
