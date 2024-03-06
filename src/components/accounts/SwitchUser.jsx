import React, { useState, useEffect } from 'react'
import '../componentsSyles/SwitchUser.css'

const SwitchUser = ({ onSwitchUserCancel, openSwitchUser, users, onSelectUser }) => {
  const [isSwitchUserOpen, setIsSwitchUserOpen] = useState(openSwitchUser);
  const [passwordInput, setPasswordInput] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setIsSwitchUserOpen(openSwitchUser);
  }, [openSwitchUser]);

  const handleCancel = () => {
    setIsSwitchUserOpen(false);
    onSwitchUserCancel();
  };

  const handleSwitchSubmit = (e) => {
    e.preventDefault();
    const password = passwordInput;
    const user = users.find((u) => u.password === password);
    if (user) {
      setLoader(true)
      setTimeout(() => {
        onSelectUser(password);
        setPasswordInput('');
        setLoader(false)
      }, 2000);
    } else {
      setWrongPassword(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Call the same logic as form submission
      handleSwitchSubmit(e);
    }
  }

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
    setWrongPassword(false);
  };

  return (
    <>
      {isSwitchUserOpen ? (
        <div className='login-switch-fullpage'>
          <div className="login-switch-form">
            <form action="" onSubmit={handleSwitchSubmit}>
              <label className='header-label' htmlFor="password"><p>LOGIN</p></label>
              <div className="details-holder">
                <div className="input-field">
                  <label htmlFor=""><p>User</p></label>
                  <select name="" id="">
                    {users.map((user) => (
                      <option value={user.id} key={user.id}>
                        {user.firstName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="password-field">
                  <label htmlFor="password"><p>Password</p></label>
                  <input
                    type="password"
                    id='passwordS'
                    placeholder='Enter Password'
                    value={passwordInput}
                    onKeyPress={handleKeyPress}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              {loader && (
                <div id="display-loader" className='log-in-loader'>
                  <div className="spinner"></div>
                  <p className='hint' style={{color: 'var(--text-clr)'}}>Loading...</p>
                </div>
              )}
              {wrongPassword && (
                <p id="display-wrong-password-for-switchUser" className='hint'>
                  Wrong password. Please try again.
                </p>
              )}
              <div className="loginbuttons">
                <button onClick={handleCancel}>Cancel</button>
                <button type='submit'>Login</button>
              </div>
              <p id="display-wrong-password-for-switchUser" style={{color: 'var(--text-clr)', fontWeight: 'light'}} className='hint'>
                  Cancel to log In as Guest.
                </p>
              <div className="bottom"></div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SwitchUser;
