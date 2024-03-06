import React from 'react';
import '../componentsSyles/root.css'
import '../componentsSyles/HomeSearch.css'
const CustomerSearch = ({ onChange }) => {
  return (
    <div className="divider">
      <div className='customer-search-botton-box'>
        <input
          type="search"
          className='customer-searchee'
          onChange={onChange}
          placeholder="Enter Customer name or phone number"
        />
        <i className='bx bxs-down-arrow'></i>
      </div>
    </div>
  )
}

export default CustomerSearch