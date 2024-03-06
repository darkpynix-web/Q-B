import React from 'react'
import { $Header } from '../index'
const ReceivingVounchers = ({onSelectOption}) => {
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

export default ReceivingVounchers