import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const yandexMetrika = process.env.REACT_APP_YANDEX_METRIKA;

if (process.env.NODE_ENV === "production" && yandexMetrika) {
  const metrika = document.createElement("script");
  metrika.innerHTML = yandexMetrika;

  document.getElementsByTagName("head")[0].appendChild(metrika);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
