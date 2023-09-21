export const AvailableLanguages = {
  en: { code: "en", text: "ENG" },
  ru: { code: "ru", text: "RUS" },
};

export const browserColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches
  ? "dark"
  : "light";

export const appThemes = ["light", "dark", "ianagi"];
