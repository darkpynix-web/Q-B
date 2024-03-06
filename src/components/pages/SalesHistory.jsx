import React from 'react'
import { $Header, Taskbar, Content } from '../index'
const SalesHistory = ({onSelectOption}) => {
  return (
    <div>
      < $Header
        label=''
        iWantToControl={true}
        salesHistorySearchControl={true}
        onSelectOption={onSelectOption}
      />
      <Taskbar />
      <Content />
    </div>
  )
}

export default SalesHistory