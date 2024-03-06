import React, { useState, useEffect } from 'react';
import './componentsSyles/root.css';
import Profile from './Profile';
import './componentsSyles/Header.css';


const Header = ({ toggleDarkMode, selectedUser, toggleSmallNav, handleSwitchUser }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });



  return (
    <div className='header'>
      <div className='roll-one'>
        <button onClick={toggleSmallNav} className="nav-btn"><i className='bx bxs-grid'></i></button>
        <div className="logo">
          <div className="d-logo" style={{
            background: `url(${require("../icons/logo.png").default})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: 'transparent'
          }}>
          </div>
          <p className='logo-name'>MicBook.</p>
        </div>
      </div>
      <div className='roll-two'>
        <div className="date" title='Press Ctrl + Alt + D'>
          <button className='mode-switcher-small-device' onClick={toggleDarkMode}>
            <i className='bx bxs-moon'></i>
          </button>
          <div className="time">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div>
          <div className="day">{formattedDate}</div>
        </div>
      </div>
      <Profile
        handleSwitchUser={handleSwitchUser}
        formattedDate={formattedDate}
        toggleDarkMode={toggleDarkMode}
        currentTime={currentTime}
        selectedUser={selectedUser}
      />

    </div>
  );
};

export default Header;

