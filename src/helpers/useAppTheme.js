import { useState } from "react";
import { appThemes, browserColorScheme } from "./consts";

const themePrefix = "theme-";

const getValidThemeName = (theme) => {
  return theme && appThemes.includes(theme) ? theme : "";
};

const addBodyClass = (className) =>
  document.body.classList.add(themePrefix + className);

const removeOtherThemes = (theme) =>
  appThemes.forEach(
    (item) =>
      theme !== item && document.body.classList.remove(themePrefix + item)
  );

const isActiveTheme = (theme) => {
  document.body.classList.contains(themePrefix + theme);
};

export const useAppTheme = (name) => {
  const [theme, setAppTheme] = useState(
    getValidThemeName(name) ||
      localStorage.getItem("color-theme") ||
      browserColorScheme
  );

  if (!isActiveTheme(name) && appThemes.includes(theme)) {
    removeOtherThemes(theme);
    addBodyClass(theme);

    localStorage.setItem("color-theme", theme);
  }

  return [theme, setAppTheme];
};
