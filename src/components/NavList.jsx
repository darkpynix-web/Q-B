import React from 'react'
import './componentsSyles/root.css';
import { shortcutActions } from '../utils/shortcutActions';
import QuickButton from './QuickButton';
import './componentsSyles/NavList.css'
const NavList = ({ held, onSelectOption }) => {

  const handleShortcutClick = (action) => {
    onSelectOption(action)
  }
  return (
    <div className='navList'>
      {shortcutActions.map((action) => (
        <QuickButton
          held={held}
          action={action.name}
          key={action.id}
          image={action.icon}
          onClick={() => { handleShortcutClick(action.name) }}
        />
      ))}
    </div>
  )
}

export default NavList