import React from 'react'
import { $Header } from '../index'
const HeldVounchers = ({onSelectOption}) => {
  return (
    <div>
      < $Header
        label=''
        iWantToControl={true}
        salesSearchControl={true}
        customerSearchControl={true}
      />
    </div>
  )
}

export default HeldVounchers