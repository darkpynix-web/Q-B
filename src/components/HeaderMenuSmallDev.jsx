import React, { useState, useEffect } from 'react'
import './componentsSyles/HeaderMenu.css';
const HeaderMenuSmallDev = ({openNavbar, handleShortcutKeysOpen}) => {

  const [showNavbar, setShowNavbar] = useState(openNavbar);

  useEffect(() => {
    setShowNavbar(openNavbar)
  }, [openNavbar])


  return (
    <>
    {showNavbar ? (
      <div className="menu">
      <a href="#">File</a>
      <a href="#">Sales</a>
      <a href="#">Customers</a>
      <a href="#">Inventory</a>
      <a href="#">Purchasing</a>
      <a href="#">Employees</a>
      <a href="#">Reports</a>
      <a href='#' onClick={handleShortcutKeysOpen}>Shortcut Keys</a>
      <a href="#">Help</a>
    </div>
    ) : null}
    </>
  )
}

export default HeaderMenuSmallDev