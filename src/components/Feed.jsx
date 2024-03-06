import React, { useState } from 'react';

import './componentsSyles/root.css'
import points from './pointOfSales'
const Feed = ({unheldReceipt, onUnhold, onHeldReceipt, held, handleOpenUserForm, selectedOption, onSelectOption, items, handleAddCustomerFormAdd, handleAddInventoryFormAdd, users, customers }) => {
  const PageToRender = points[selectedOption]
  const [openCustomerSelect, setOpenCustomerSelect] = useState(true)
  const handleOpenCustomerSelect = () => {
    setOpenCustomerSelect(!openCustomerSelect)
    console.log("lcik")
  }
  return (
    <div className='feedsPage'>
      {PageToRender
        &&
        <PageToRender
          onUnhold={onUnhold}
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
          isCustomerSelectOpen={handleOpenCustomerSelect}
          handleOpenCustomerSelect={handleOpenCustomerSelect}
          unheldReceipt={unheldReceipt}
        />
      }
    </div>
  )
}

export default Feed