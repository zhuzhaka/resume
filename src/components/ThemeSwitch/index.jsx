import { useAppTheme } from "../../helpers/useAppTheme";
import { DropList } from "../DropList";
import {
  DarkThemeIcon,
  IanagiThemeIcon,
  LightThemeIcon,
} from "./themeSvgIcons";

import "./ThemeSwitch.scss";

const items = [
  {
    title: "light",
    icon: LightThemeIcon,
    dataAttributes: { "data-theme": "light" },
  },
  {
    title: "dark",
    isSelected: true,
    icon: DarkThemeIcon,
    dataAttributes: { "data-theme": "dark" },
  },
  {
    title: "ianagi",
    icon: IanagiThemeIcon,
    dataAttributes: { "data-theme": "ianagi" },
  },
];

export const ThemeSwitch = () => {
  const [theme, setTheme] = useAppTheme();

  const onItemClickHandle = (e) => {
    setTheme(e.target.getAttribute("data-theme"));
  };

  return (
    <div className="theme-switch">
      <DropList
        items={items}
        selectedItem={theme}
        onItemClick={onItemClickHandle}
      />
    </div>
  );
};
