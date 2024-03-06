import React from 'react';
import '../componentsSyles/root.css'
import { Button } from './index'
import '../componentsSyles/HomeSearch.css'
const ItemListSearch = ({ onChange, handleAddInventoryFormAdd }) => {
  return (
    <div className='customer-list-search-botton-box'>
      <input
        type="search"
        className='customer-list-search'
        onChange={onChange}
        placeholder="Search Inventory"
      />
      <i className='bx bx-search-alt-2' ></i>
      <Button
        buttonName='Show Details'
      />
      <Button
        buttonName='Add'
        onClick={handleAddInventoryFormAdd}
      />
      <Button
        buttonName='Edit'
      />
    </div>
  )
}

export default ItemListSearch