import React from 'react'
import { $Header, ItemsHolder } from '../index';

const ItemList = ({ items, selectedOption, handleAddInventoryFormAdd, onSelectOption }) => {

  return (
    selectedOption === 'Item List' &&
    <div>
      <$Header
        iWantToControl={true}
        itemListControl={true}
        handleAddInventoryFormAdd={handleAddInventoryFormAdd}
        onSelectOption={onSelectOption}
      />
      <ItemsHolder items={items} />
    </div>
  )
}

export default ItemList