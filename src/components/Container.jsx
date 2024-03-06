import React, { useState } from 'react'
import './componentsSyles/root.css'
import './componentsSyles/container.css'
import { $Header, Navigator, Feed, IWantToMenu, ShortcutKeys } from './index';
const Container = (
  {
    handleOpenUserForm,
    users,
    customers,
    handleAddInventoryFormAdd,
    handleAddCustomerFormAdd,
    selectedOption,
    onSelectOption,
    items,
    isOpen,
    handleShortcutKeysClose,
    onHeldReceipt,
    held,
    onUnhold,
    unheldReceipt
  }
) => {
  const [showedSelectedContent, setShowedSelectedContent] = useState(true)


  let content = null;

  const handleSelectedOption = () => {
    setShowedSelectedContent(false);
    onSelectOption(null)
  }

  if (selectedOption) {
    content = (
      <div className='re-rendered-view'>
        <h1 className='heading'>{selectedOption} Page <button onClick={handleSelectedOption}>X</button></h1>
        <Feed
          handleAddInventoryFormAdd={handleAddInventoryFormAdd}
          handleAddCustomerFormAdd={handleAddCustomerFormAdd}
          handleOpenUserForm={handleOpenUserForm}
          selectedOption={selectedOption}
          items={items}
          users={users}
          customers={customers}
          onSelectOption={onSelectOption}
          onHeldReceipt={onHeldReceipt}
          held={held}
          onUnhold={onUnhold}
          unheldReceipt={unheldReceipt}
        />
      </div>
    );
  } else {
    content = (
      <div className='container-holder'>
        <h1 className='heading'>Home Page </h1>
        < $Header
          label='Search'
          iWantToControl={true}
          homeSearchControl={true}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
        />
        <h1 className='heading'>Navigator</h1>
        <div className="ruler"></div>
        <br />
        < Navigator
          onSelectOption={onSelectOption}
          held={held}
        />
      </div>
    );
  }
  return (
    <div className='container'>
      {content}
      <ShortcutKeys
        isOpen={isOpen}
        handleShortcutKeysClose={handleShortcutKeysClose}
      />
    </div>
  )
}

export default Container