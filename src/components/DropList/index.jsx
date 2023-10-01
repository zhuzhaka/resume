import "./DropList.scss";

// items = [{ title, icon?, dataAttributes?: {'attribute': "..."} }]

const listWrapperClassName = "dropdown-list__items-wrapper";
const listDroppedClassName = "dropdown-list__items-wrapper_dropped";

function closeDropListsHandler(e) {
  if (!e.target.closest(".dropdown-list")) {
    CLoseDropLists();
    window.removeEventListener("click", closeDropListsHandler, false);
  }
}

export const CLoseDropLists = () => {
  document
    .querySelectorAll(".dropdown-list__items-wrapper_dropped")
    .forEach((item) => {
      item.classList.remove("dropdown-list__items-wrapper_dropped");
      item
        .closest(".dropdown-list_dropped")
        ?.classList.remove("dropdown-list_dropped");
    });
};

export const DropList = ({
  items,
  selectedItemTitle,
  onItemClick,
  onListDropped,
  showTitle = true,
  showIcon = true,
}) => {
  const selectedItem = items.find((item) => item.title === selectedItemTitle);

  const onItemClickHandler = (e) => {
    if (typeof onItemClick === "function") {
      onItemClick(e);
    }
  };

  const onListDroppedHandler = (e) => {
    const [currentElement] = e.currentTarget.querySelectorAll(
      "." + listWrapperClassName
    );
    const isDropped = currentElement.classList.contains(listDroppedClassName);

    document.querySelectorAll("." + listDroppedClassName).forEach((element) => {
      if (currentElement !== element) {
        element.classList.remove(listDroppedClassName);
        element
          .closest(".dropdown-list_dropped")
          ?.classList.remove("dropdown-list_dropped");
      }
    });

    currentElement.classList.toggle(listDroppedClassName);
    e.currentTarget.classList.toggle("dropdown-list_dropped");

    if (isDropped) {
      window.removeEventListener("click", closeDropListsHandler, false);
    } else {
      window.addEventListener("click", closeDropListsHandler, false);
    }

    if (typeof onListDropped === "function") {
      onListDropped(e);
    }
  };

  return (
    <div className="dropdown-list" onClick={onListDroppedHandler}>
      <div className="dropdown-list__header">
        <div
          className={`dropdown-list__selected${
            !showTitle ? "dropdown-list__no-title" : ""
          }`}>
          {selectedItem.icon && showIcon
            ? typeof selectedItem.icon === "function"
              ? selectedItem.icon()
              : selectedItem.icon
            : ""}
          {showTitle && (
            <span className="dropdown-list__selected-title">
              {selectedItem.title}
            </span>
          )}
        </div>
        <span className="dropdown-list__icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_iconCarrier">
              <path
                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195
              8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"></path>
            </g>
          </svg>
        </span>
      </div>
      <ul className={listWrapperClassName}>
        {items.map(({ title, icon, dataAttributes }) => (
          <li
            key={title}
            {...dataAttributes}
            onClick={onItemClickHandler}
            className={`dropdown-list__item${
              selectedItem.title === title ? " dropdown-list__item_active" : ""
            }
            ${!showTitle ? "dropdown-list__no-title" : ""}
            `}>
            {icon && showIcon
              ? typeof icon === "function"
                ? icon()
                : icon
              : ""}
            {showTitle && <span>{title}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};
