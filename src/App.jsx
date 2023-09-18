import { LocalizationContext } from "./context";
import { useLocalization } from "./helpers/useLocalization";
import { MainPage } from "./pages/MainPage";

import "./scss/app.scss";

import _localizations from "./localization.json";

function App() {
  const [localization, setLocalization] = useLocalization("", {
    cookieName: "pageLanguage",
    localizationTexts: _localizations,
  });

  return (
    <LocalizationContext.Provider value={{ localization, setLocalization }}>
      <MainPage />
    </LocalizationContext.Provider>
  );
}

export default App;
