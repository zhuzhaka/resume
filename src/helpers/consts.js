export const RuFlag = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill-rule="nonzero" fill="none">
        <path fill="#FFF" d="M0 4h24v8H0z" />
        <path fill="#D52B1E" d="M0 12h24v8H0z" />
        <path fill="#0039A6" d="M0 9.333h24v5.333H0z" />
      </g>
    </svg>
  );
};

export const EnFlag = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill-rule="nonzero" fill="none">
        <path fill="#F0F0F0" d="M0 4.016h24v16H0z" />
        <path
          fill="#D80027"
          d="M13.5 4.015h-3v6.5H0v3h10.5v6.5h3v-6.5H24v-3H13.5z"
        />
        <g fill="#0052B4">
          <path d="M18.459 14.798L24 17.877v-3.079zM14.609 14.798L24 20.015V18.54l-6.736-3.742zM21.498 20.015l-6.89-3.828v3.828z" />
        </g>
        <path fill="#F0F0F0" d="M14.609 14.798L24 20.015V18.54l-6.736-3.742z" />
        <path fill="#D80027" d="M14.609 14.798L24 20.015V18.54l-6.736-3.742z" />
        <g fill="#0052B4">
          <path d="M4.235 14.798L0 17.15v-2.353zM9.391 15.461v4.554H1.195z" />
        </g>
        <path fill="#D80027" d="M5.736 14.798L-1 18.54v1.475l9.391-5.217z" />
        <g fill="#0052B4">
          <path d="M5.541 9.233L0 6.154v3.079zM9.391 9.233L0 4.015v1.476l6.736 3.742zM2.502 4.015l6.89 3.828V4.015z" />
        </g>
        <path fill="#F0F0F0" d="M9.391 9.233L0 4.015v1.476l6.736 3.742z" />
        <path fill="#D80027" d="M9.391 9.233L0 4.015v1.476l6.736 3.742z" />
        <g fill="#0052B4">
          <path d="M19.765 9.233L24 6.88v2.353zM14.609 8.57V4.015h8.196z" />
        </g>
        <path fill="#D80027" d="M18.264 9.233L25 5.49V4.015l-9.391 5.218z" />
      </g>
    </svg>
  );
};

export const AvailableLanguages = {
  en: { code: "en", text: "ENG", icon: EnFlag },
  ru: { code: "ru", text: "RUS", icon: RuFlag },
};

export const browserColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches
  ? "dark"
  : "light";

export const appThemes = ["light", "dark", "ianagi"];
