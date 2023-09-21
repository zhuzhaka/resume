import { useEffect, useState } from "react";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { LocalizationContext } from "./context";
import { browserColorScheme } from "./helpers/consts";
import { useAppTheme } from "./helpers/useAppTheme";
import { useLocalization } from "./helpers/useLocalization";
import { MainPage } from "./pages/MainPage";

import "./scss/app.scss";

const localizationJsonUrl = "./localization.json";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [localizationJson, setLocalizationJson] = useState(null);
  const [localization, setLocalizationLanguage] = useLocalization(
    localizationJson,
    {
      localStorageName: "pageLanguage",
    }
  );

  useEffect(() => {
    if (!localizationJson) {
      fetch(localizationJsonUrl).then((data) =>
        data.json().then((json) => setLocalizationJson(json))
      );
    }

    if (localization && isLoading) {
      setIsLoading(false);
    }
  }, [localization]);

  return !isLoading ? (
    <LocalizationContext.Provider
      value={{ localization, setLocalizationLanguage }}
    >
      <MainPage />
    </LocalizationContext.Provider>
  ) : (
    <></>
  );
}

export default App;
