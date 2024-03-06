import React from 'react'

const Button = ({ onClick, buttonName }) => {
  return (
    <button onClick={onClick} className='show-details-btn'>{buttonName}</button>
  )
}

export default Button