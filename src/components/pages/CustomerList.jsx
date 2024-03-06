import React from 'react'
import { $Header, Content, Taskbar } from '../index'
const CustomerList = ({onSelectOption, customers, handleAddCustomerFormAdd}) => {
  return (
    <div>
      < $Header
        label=''
        iWantToControl={true}
        customerListSearchControl={true}
        onSelectOption={onSelectOption}
        handleAddCustomerFormAdd={handleAddCustomerFormAdd}
      />
      <Content
        customers={customers}
       />
    </div>
  )
}

export default CustomerList