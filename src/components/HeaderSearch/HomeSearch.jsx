import React from 'react'
import '../componentsSyles/root.css'
import '../componentsSyles/HomeSearch.css'
const Search = ({ onChange }) => {
  return (
    <div className='home-search-botton-box'>
      <input
        type="search"
        className='home-search-botton'
        onChange={onChange} 
        placeholder="Quick Find Customer, Item, Receipt, Help and more"/>
      <i className='bx bx-search-alt-2' ></i>
    </div>
  )
}

export default Search