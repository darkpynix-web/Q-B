import React, { useState, useEffect, useRef } from 'react'
import '../componentsSyles/root.css'
import '../componentsSyles/HomeSearch.css'
import QuickSelectItem from './QuickSelectItem'

const SalesSearch = ({ items, onSelectedItem, handleAddInventoryFormAdd }) => {

  const [searchItem, setSearchItem] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)
  const [showQuickItemSelect, setShowQuickItemSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const searchInputRef = useRef(null); // Create a ref for the input field
  const inputFocus = useRef(null); // Create a ref for the input field

  useEffect(() => {
    // Add a click event listener to the document
    const handleDocumentClick = (event) => {
      // Check if the clicked element is NOT the search input
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowQuickItemSelect(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    // Reset activeIndex when the menu closes
    if (!QuickSelectItem) {
      setActiveIndex(-1);
    }
  }, [QuickSelectItem]);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
    setShowQuickItemSelect(true)
  };


  const filteredItems = items?.filter(item => item.name.toLowerCase().includes(searchItem.toLocaleLowerCase()))
  const toggleQuickItemSelectMenu = () => {
    setShowQuickItemSelect(true)
  }

  const handleQuickSelectItemClick = (e) => {
    // Prevent the click event from propagating to the document
    e.stopPropagation();
  };

  const handleItemPick = (selectedItem) => {
    setSelectedItem(selectedItem);
    setShowQuickItemSelect(false)
    onSelectedItem(selectedItem)
    setSearchItem('')
    inputFocus.current.focus();
  };
  const handleKeyDown = (e) => {

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      if (e.key === 'ArrowUp') {
        setActiveIndex(Math.max(activeIndex - 1, 0));
      } else if (e.key === 'ArrowDown') {
        setActiveIndex(Math.min(activeIndex + 1, items.length - 1));
      }
      const activeRow = document.querySelector('.quick-select-items .active');
      if (activeRow) {
        activeRow.scrollIntoView({
          block: 'center',
          inline: 'nearest' // Scrolls the row to the nearest edge of the container
        });
      }
    } else if (e.key === 'Enter' && activeIndex >= 0 && activeIndex < filteredItems.length) {
      const selectedItem = filteredItems[activeIndex]
      handleItemPick(selectedItem)
    }
  };
  useEffect(() => {
    const handleCtrlF = (e) => {
      if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        inputFocus.current.focus();
      }
    };

    // Attach the event listener inside the useEffect
    document.addEventListener('keydown', handleCtrlF);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleCtrlF);
    };
  }, []);
  return (
    <div className='divider'>
      <div className='sales-search-botton-box' tabIndex={0} onKeyDown={handleKeyDown}>
        <input
          title='Press Ctrl + F'
          type="search"
          onChange={handleInputChange}
          className='sales-search'
          value={searchItem}
          onClick={() => setShowQuickItemSelect(true)}
          placeholder="Scan or enter item information"
          ref={(el) => {
            searchInputRef.current = el;
            inputFocus.current = el;
          }}
        />
        <i onClick={toggleQuickItemSelectMenu} className='bx bxs-down-arrow'></i>
      </div>
      {showQuickItemSelect ?
        (
          <div className='item-list-holder'>
            <table>
              <thead>
                <tr>
                  <th>Num</th>
                  <th>Item Name</th>
                  <th>Price</th>
                </tr>
              </thead>
            </table>
            <QuickSelectItem
              handleItemPick={handleItemPick}
              handleQuickSelectItemClick={handleQuickSelectItemClick}
              activeIndex={activeIndex}
              items={filteredItems}
            />
            <div className="extras">
              <button>Sell Misc Item</button>
              <button onClick={handleAddInventoryFormAdd}>Add New Item</button>
              <button>Select</button>
            </div>
          </div>
        )
        : null}

    </div>
  )
}

export default SalesSearch