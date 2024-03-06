import React from 'react'
import '../componentsSyles/root.css'
import '../componentsSyles/$Header.css'
const IWantTo = ({ toggleWantTo }) => {
  return (
    <>
      <button className='iWantTo' onClick={toggleWantTo}>
        <i className='bx bxs-user-detail'></i>
        <p>I Want to...</p>
        <i className='bx bx-menu-alt-left'></i>
        <i className='bx bxs-chevron-down' ></i>
      </button>
    </>
  )
}

export default IWantTo