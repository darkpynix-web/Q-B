import React from 'react';
import './componentsSyles/root.css';
import './componentsSyles/Minimize.css'
const Minimize = ({onSelectOption}) => {
  const handleShortcutClick =() => {
    onSelectOption(false)
  }
  return (
    <div className='minimize-btn-holder'>
      <button onClick={handleShortcutClick}>
        <i className='bx bx-home'></i>
        <h4>Home</h4>
      </button>
    </div>
  )
}

export default Minimize