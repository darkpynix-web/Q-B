import React from 'react'
import '../componentsSyles/root.css'
import { $Header } from '../index'
const ActivePayment = ({onSelectOption}) => {
  return (
    <div>
      < $Header
        label=''
        iWantToControl={true}
        salesSearchControl={true}
        customerSearchControl={true}
        onSelectOption={onSelectOption}
      />
    </div>
  )
}

export default ActivePayment