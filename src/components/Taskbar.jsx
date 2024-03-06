import React from 'react';
import './componentsSyles/root.css';
import './componentsSyles/$Header.css'
const Taskbar = ({ handleShowQuickItemSelect }) => {
  return (
    <div className='taskbar' onClick={() => handleShowQuickItemSelect}>
      <div className="task-head">
        <p>ID</p>
        <p>Item Name</p>
        <p>Regular Price</p>
        <p>Quantity</p>
      </div>
      <div className="emt-list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </div>
    </div>
  )
}

export default Taskbar