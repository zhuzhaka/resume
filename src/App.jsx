import { useEffect, useState } from "react";
import { LocalizationContext } from "./context";
import { useLocalization } from "./helpers/useLocalization";
import { MainPage } from "./pages/MainPage";

import "./scss/app.scss";
import { Header } from "./components/Header";

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
      <Header />
      <MainPage />
    </LocalizationContext.Provider>
  ) : (
    <></>
  );
}

export default App;
