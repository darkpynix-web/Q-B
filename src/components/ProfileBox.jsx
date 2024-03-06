import React, { useEffect } from 'react'
import { inbuiltUsers } from '../utils/items'
const ProfileBox = ({ handleSwitchUser, selectedUser, toggleDarkMode, profileBoxRef }) => {
    // useEffect(() => {
    //     const settings = document.getElementById("setting-user-box-holder");
    //     const sideSettingBox = document.getElementById("sideSettingBox");
    //     let timeout;

    //     const handleMouseOver = () => {
    //         clearTimeout(timeout); // Clear any previous timeout
    //         sideSettingBox.style.display = "flex";
    //     };

    //     const handleMouseOut = () => {
    //         // Add a delay before hiding sideSettingBox
    //         timeout = setTimeout(() => {
    //             sideSettingBox.style.display = "";
    //         }, 500); // Adjust the delay time (in milliseconds) as needed
    //     };
    //     sideSettingBox.addEventListener("mouseover", handleMouseOver)
    //     sideSettingBox.addEventListener("mouseout", handleMouseOut)
    //     // Add a mouseover event listener to the settings box
    //     settings.addEventListener("mouseover", handleMouseOver);


    //     // Add a mouseout event listener to the settings box
    //     settings.addEventListener("mouseout", handleMouseOut);

    //     return () => {
    //         // Remove event listeners when the component unmounts
    //         settings.removeEventListener("mouseover", handleMouseOver);
    //         sideSettingBox.removeEventListener("mouseover", handleMouseOver)
    //         settings.removeEventListener("mouseout", handleMouseOut);
    //     };
    // }, []);

    const handleSideSettingVisibility = (e) => {
        e.stopPropagation();
        const sideSettingBox = document.getElementById("sideSettingBox");

        if (sideSettingBox.style.display === 'none') {
            sideSettingBox.style.display = "flex"
        } else {
            sideSettingBox.style.display = "none"
        }
    }
    useEffect(() => {
        const switchUserElement = document.getElementById("switchUser");
        const availableUserBox = switchUserElement.querySelector(".available-user-box");
        const icon = switchUserElement.querySelector(".bx-rotate-right")

        const handleMouseOver = () => {
            availableUserBox.style.width = "170px";
            icon.style.transform = "rotate(180deg)"
        };

        const handleMouseOut = () => {
            availableUserBox.style.width = ""; // Revert to the default width
            icon.style.transform = "";
        };

        // Add event listeners when the component mounts
        switchUserElement.addEventListener("mouseover", handleMouseOver);
        switchUserElement.addEventListener("mouseout", handleMouseOut);

        // Remove event listeners when the component unmounts
        return () => {
            switchUserElement.removeEventListener("mouseover", handleMouseOver);
            switchUserElement.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    const toggleClassList = () => {
        const toggleElement = document.querySelector('.header .profile #toggleClass');
        toggleElement.classList.toggle('bxs-sun');
    };

    return (
        <div className='profileBox' ref={profileBoxRef}>
            <div className="profile-pic-holder">
                <div className='profile-picture'>
                    <img src={selectedUser ? selectedUser.picture : require("../icons/prof.jpg").default} />
                </div>

                <h1>Hi, {selectedUser ? selectedUser.firstName : 'Guest'}</h1>
                {selectedUser ? (
                    <div className='user-fullname'>
                        <p>{selectedUser.firstName}</p>
                        <p>{selectedUser.lastName}</p>
                    </div>
                ) : <button onClick={handleSwitchUser}>Login</button>}
            </div>
            <div className="switch-user-box">
                <ul>
                    <li id='switchUser' onClick={handleSwitchUser}>
                        <i class='bx bx-rotate-right last-two-li'></i>
                        <span>Swtich User</span>
                        <div className="available-user-box">
                            {inbuiltUsers.map((users) => (
                                <div key={users.id} className="user-pics circle">

                                    <img src={users.picture} alt={users.lastName} />
                                </div>
                            ))}
                        </div>
                    </li>
                    <li id='setting-user-box-holder' onClick={handleSideSettingVisibility}>
                        <i class='bx bx-cog last-two-li'></i>
                        <span>Settings</span>
                        <i class='bx bx-chevron-right move-icon-right last-two-li' ></i>
                    </li>
                    <li>
                        <i className='bx bx-log-out last-two-li'></i>
                        <span>Sign Out</span>
                        <i class='bx bx-chevron-right move-icon-right last-two-li' ></i>
                    </li>
                    <li>
                        <i className='bx bx-log-out last-two-li'></i>
                        <span>Exit MicBook</span>
                    </li>
                </ul>
            </div>
            <div id='sideSettingBox' className="settings-bx-holder">
                <li>
                    <i class='bx bxs-user-detail'></i>
                    <p>Account Management</p>
                    <i class='bx bx-chevron-right' ></i>
                </li>
                <li onClick={toggleDarkMode}>
                    <i class='bx bxs-capsule'></i>
                    <p onClick={toggleClassList}>Switch Mode</p>
                    <i class='bx bx-moon' id='toggleClass' ></i>
                </li>
            </div>
        </div>
    )
}

export default ProfileBox