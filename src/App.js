import React, { useState, useEffect } from "react";
import { Header, Box, Login } from './components';
import './style.css';
import './components/componentsSyles/root.css'
import { inbuiltUsers } from "./utils/items";
const App = () => {
    const [showNav, setShowNav] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    const [addUserForm, setAddUserForm] = useState(false);
    const [switchUser, setSwitchUser] = useState(false);
    const [darkmode, setDarkmode] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSelectedUser = (password) => {
        const user = inbuiltUsers.find((u) => u.password === password);
        // const onWrongPassInput = document.getElementById('display-wrong-password-for-switchUser')
        if (user) {
            setSelectedUser(user);
            setSwitchUser(false)
        } else {
            setSwitchUser(true)
        }
    }
    const toggleSmallNav = () => {
        setShowNav(!showNav)
    }
    const handleOpenUserForm = () => {
        console.log('buton is clicked')
        setAddUserForm(!addUserForm)
    }
    const handleSwitchUser = () => {
        setSwitchUser(!switchUser)
    }

    const handleAccountCancelForm = () => {
        setAddUserForm(false)
    }


    const toogleDarkMode = (e) => {
        e.stopPropagation();
        setDarkmode(!darkmode)
    }

    const handleSelectedOption = (option) => {
        setSelectedOption(option)
    }
    useEffect(() => {
        const handleCtrlShiftD = (e) => {
            if (e.ctrlKey && e.altKey && e.key === 'd') {
                e.preventDefault();
                setDarkmode(!darkmode);

            }
        }
        document.addEventListener("keydown", handleCtrlShiftD);

        return () => {
            document.removeEventListener("keydown", handleCtrlShiftD);
        }
    }, [darkmode])
    return (
        <div className={`app ${darkmode ? 'dark-mode' : ''}`}>
            < Login />
            < Header
                handleSwitchUser={handleSwitchUser}
                toggleSmallNav={toggleSmallNav}
                toggleDarkMode={toogleDarkMode}
                selectedUser={selectedUser}
            />
            < Box
                onAddAccountFormCancel={handleAccountCancelForm}
                openUserForm={addUserForm}
                openNavbar={showNav}
                selectedOption={selectedOption}
                onSelectOption={handleSelectedOption}
                onSwitchUserCancel={handleSwitchUser}
                openSwitchUser={switchUser}
                onSelectUser={handleSelectedUser}
                handleOpenUserForm={handleOpenUserForm}
            />
        </div>
    )
}

export default App