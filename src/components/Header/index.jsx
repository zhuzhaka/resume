import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeSwitcher } from "../ThemeSwitcher";

import "./Header.scss"

const headerScrollData = {
  lastActionPositionY: 0,
  lastPositionY: 0,
  isHidden: false,
  hideLimit: 80,
  revealLimit: 2
};

export const Header = () => {

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const header = document.getElementById('mheader');    
    
    if (scrollY - headerScrollData.lastActionPositionY > headerScrollData.hideLimit) {
      header.classList.add('header-mobile_hidden');
      headerScrollData.lastActionPositionY = scrollY;
      headerScrollData.isHidden = true;
    } else if (headerScrollData.lastPositionY - scrollY > headerScrollData.revealLimit) {
      header.classList.remove('header-mobile_hidden');
      headerScrollData.lastActionPositionY = scrollY;
      headerScrollData.isHidden = false;
    }
    
    headerScrollData.lastPositionY = scrollY;
  })
  return (
    <div id="mheader" className="header-mobile">
      <div className="header-mobile__content">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
}