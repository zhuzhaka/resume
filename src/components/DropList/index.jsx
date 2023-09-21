import { useState } from "react";
import "./DropList.scss";

// items = [{ title, icon?, dataAttributes?: {'attribute': "..."} }]

export const DropList = ({
  items,
  selectedItem,
  onItemClick,
  onListDropped,
}) => {
  const [listDropped, setListDropped] = useState(false);

  const onListDroppedHandler = (e) => {
    setListDropped(true);

    if (typeof onListDropped === "function") {
      onListDropped(e);
    }
  };

  const onItemClickHandler = (e) => {
    setListDropped(false);

    if (typeof onItemClick === "function") {
      onItemClick(e);
    }
  };

  return (
    <div className="dropdown-list">
      <div
        className={`dropdown-list__overlay${
          listDropped ? " dropdown-list__overlay_dropped" : ""
        }`}
        onClick={() => setListDropped(false)}
      ></div>
      <div
        className="dropdown-list__preview-item"
        onClick={onListDroppedHandler}
      >
        {items.find((item) => item.title === selectedItem).icon()}
        <span>{selectedItem}</span>
      </div>
      <ul
        className={`dropdown-list__items-wrapper${
          listDropped ? " dropdown-list__items-wrapper_dropped" : ""
        }`}
      >
        {items.map(({ title, icon, dataAttributes }) => (
          <li
            key={title}
            {...dataAttributes}
            onClick={onItemClickHandler}
            className={`dropdown-list__item${
              selectedItem === title ? " dropdown-list__item_active" : ""
            }`}
          >
            {icon ? (typeof icon === "function" ? icon() : icon) : ""}
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
