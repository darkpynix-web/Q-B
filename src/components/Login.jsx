import React, { useState, useEffect } from 'react';
import './componentsSyles/Login.css';

const Login = () => {
    const userName = 'Administrator';
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handlePasswordInput = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    const handleLoginButton = (e) => {
        e.preventDefault();
        if (password === 'admin') {
            setIsLoggedIn(true);
            
        } else {
            setIsLoggedIn(false)
        }
    }
    const handleLoginSubmitButton = (e) => {
        e.preventDefault();
        if (password === 'admin') {
            setIsLoggedIn(true);
            
        } else {
            setIsLoggedIn(false)
        }
    }


    if (isLoggedIn) {
        // If logged in, return null to hide the component
        return null;
    }

    return (
        <div className='login-fullpage'>
            <div className="login-form">
                <form action="">
                    <label className='header-label' htmlFor="password"><p>LOGIN</p></label>
                    <div className="details-holder">
                        <div className="input-field">
                            <label htmlFor=""><p>User</p></label>
                            <input type="text" value={userName} disabled/>
                        </div>
                        <div className="password-field">
                            <label htmlFor="password"><p>Password</p></label>
                            <input  type="password" id='password' onChange={handlePasswordInput} />
                        </div>
                    </div>
                    <p className='hint'>Password hint: Administrator(admin)</p>
                    <div className="loginbuttons">
                            <button>Register</button>
                            <button onClick={handleLoginButton} onSubmit={handleLoginSubmitButton}>Login</button>
                    </div>
                    <div className="bottom">
                            
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
