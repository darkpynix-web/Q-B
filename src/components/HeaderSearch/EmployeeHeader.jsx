import React from 'react'
import {Button} from './index'
const EmployeeHeader = ({onChange, handleOpenUserForm}) => {
  return (
    <div className='customer-list-search-botton-box'>
      <input
        type="search"
        className='customer-list-search'
        onChange={onChange}
        placeholder="Search Inventory"
      />
      <i className='bx bx-search-alt-2' ></i>
      <Button buttonName='Add New User' onClick={handleOpenUserForm}/>
      <Button buttonName='Edit' />
    </div>
  )
}

export default EmployeeHeader