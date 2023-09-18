import { LocalizationContext } from "./context";
import { useLocalization } from "./helpers/useLocalization";
import { MainPage } from "./pages/MainPage";

import "./scss/app.scss";
import { useEffect, useState } from "react";

function App() {
  const [localizationFile, setLocalizationFile] = useState(null);
  const [localization, setLocalization] = useLocalization(localizationFile, {
    cookieName: "pageLanguage",
  });

  useEffect(() => {
    fetch("./localization.json").then((data) =>
      data.json().then((file) => {
        setLocalizationFile(file);
      })
    );
  }, []);

  return localization !== null ? (
    <LocalizationContext.Provider value={{ localization, setLocalization }}>
      <MainPage />
    </LocalizationContext.Provider>
  ) : (
    <></>
  );
}

export default App;
