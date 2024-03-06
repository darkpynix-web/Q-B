import React from 'react'
import './componentsSyles/root.css';
import './componentsSyles/Navigates.css'
const Navigates = ({ name, icon, onClick, href }) => {

  const handleClick = () => {
    onClick(name);
  }
  return (
    <div href={`#${href}`} className='navigates' onClick={() => onClick(handleClick)}> 
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Navigates