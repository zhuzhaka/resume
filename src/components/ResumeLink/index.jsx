import { useState } from "react";

export const ResumeLink = ({
  linkHref,
  linkText,
  subText,
  onClick,
  options = { openInNewWindow: true, }
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    if (typeof onClick === 'function') {
      onClick();
      setIsClicked(true);
    }
  }
  return (
    <>
      <div onMouseDown={handleOnClick}>
        {
          options.openInNewWindow
          ? <a href={linkHref} target="_blank" rel="noreferrer">{linkText}</a>
          : <a href={linkHref} rel="noreferrer">{linkText}</a>
        }
      </div>
		  <span className={isClicked && "resume-link_text-animation"}>{subText}</span>    
    </>
  );
}