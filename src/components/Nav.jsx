import React from 'react'
import './componentsSyles/root.css';
import './componentsSyles/Nav.css'
import './componentsSyles/@media.css'
import { Minimize, NavList } from './index';

const Nav = ({held, selectedOption, onSelectOption}) => {

  return (
    <div className="nav">
      < Minimize onSelectOption={onSelectOption}/>
      < NavList held={held} selectOption={selectedOption} onSelectOption={onSelectOption}/>
    </div>
  )
}

export default Nav