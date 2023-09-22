import { useContext } from "react";
import { useAppTheme } from "../../helpers/useAppTheme";
import { DropList } from "../DropList";
import {
  DarkThemeIcon,
  IanagiThemeIcon,
  LightThemeIcon,
} from "./themeSvgIcons";

import "./ThemeSwitch.scss";
import { AppContext } from "../../context";

const items = [
  {
    title: "light",
    icon: LightThemeIcon,
    dataAttributes: { "data-theme": "light" },
  },
  {
    title: "dark",
    icon: DarkThemeIcon,
    dataAttributes: { "data-theme": "dark" },
  },
  // {
  //   title: "ianagi",
  //   icon: IanagiThemeIcon,
  //   dataAttributes: { "data-theme": "ianagi" },
  // },
];

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(AppContext);
  
  const onItemClickHandle = (e) => {
    setTheme(e.currentTarget.getAttribute("data-theme"));
  };

  return (
    <div className="theme-switch">
      <DropList
        items={items}
        selectedItemTitle={theme}
        onItemClick={onItemClickHandle}
        showTitle={false}
      />
    </div>
  );
};
