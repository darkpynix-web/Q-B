import React from 'react'
import '../componentsSyles/root.css'
import '../componentsSyles/HomeSearch.css'
import Button from './Button'
const SalesHistorySearch = (onChange) => {
  return (
    <div className='sales-history-search-botton-box'>
      <span></span>
      <input
        type="date"
        className='sales-history-search'
        onChange={onChange}
        placeholder="Quick Find Customer, Item, Receipt, Help and more"
      />
      <Button buttonName='Show Details' />
    </div>
  )
}

export default SalesHistorySearch