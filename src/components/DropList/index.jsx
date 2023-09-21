import "./DropList.scss";

// items = [{ title, icon?, dataAttributes?: {'attribute': "..."} }]

const listWrapperClassName = "dropdown-list__items-wrapper";
const listDroppedClassName = "dropdown-list__items-wrapper_dropped";

function closeDropListsHandler(e) {
  if (!e.target.closest('.dropdown-list')) {
    document.querySelectorAll('.dropdown-list__items-wrapper_dropped')
    .forEach(item => item.classList.remove('dropdown-list__items-wrapper_dropped'));
    
    window.removeEventListener('click', closeDropListsHandler, false);
    console.log('window event')
  }
}

export const DropList = ({
  items,
  selectedItemTitle,
  onItemClick,
  onListDropped,
}) => {
  const selectedItem = items.find((item) => item.title === selectedItemTitle);
 
  const onItemClickHandler = (e) => { 
    if (typeof onItemClick === "function") {
      onItemClick(e);
    }
  };

  const onListDroppedHandler = (e) => {
    const [currentElement] = e.currentTarget.querySelectorAll('.' + listWrapperClassName);
    const isDropped = currentElement.classList.contains(listDroppedClassName);
    
    document.querySelectorAll('.' + listDroppedClassName)
      .forEach(element =>
        currentElement !== element && element.classList.remove(listDroppedClassName)
      );
      
    currentElement.classList.toggle(listDroppedClassName);
    
    if (isDropped) {
      window.removeEventListener('click', closeDropListsHandler, false);
    } else {
      window.addEventListener('click', closeDropListsHandler, false);
    }

    if (typeof onListDropped === "function") {
      onListDropped(e);
    }    
  }

  return (
    <div
      className="dropdown-list"     
      onClick={onListDroppedHandler}
    >
      <div className="dropdown-list__preview-item">
        {selectedItem.icon ? (typeof selectedItem.icon === 'function' ? selectedItem.icon() : selectedItem.icon) : ''}
        <span>{selectedItem.title}</span>
      </div>
      <ul
        className={listWrapperClassName}
      >
        {items.map(({ title, icon, dataAttributes }) => (
          <li
            key={title}
            {...dataAttributes}
            onClick={onItemClickHandler}
            className={`dropdown-list__item${
              selectedItem.title === title ? " dropdown-list__item_active" : ""
            }`}
          >
            {icon ? (typeof icon === "function" ? icon() : icon) : ""}
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
