import React, { useState, useEffect, useRef } from 'react'
import ProfileBox from './ProfileBox';
const Profile = ({ toggleDarkMode, selectedUser, formattedDate, currentTime, handleSwitchUser }) => {
    const [showProfile, setShowProfile] = useState(false);
    const profileBoxRef = useRef(null);
    const handleShowProfile = () => {
        setShowProfile(!showProfile)
    }
    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (profileBoxRef.current && !profileBoxRef.current.contains(event.target)) {
                setShowProfile(false)
            }
        };
        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        }
    }, [])

    useEffect(() => {
        const handleCtrlP = (e) => {
            if(e.ctrlKey && e.key === 'p') {
                e.preventDefault();
                handleShowProfile();
            }
        };
        document.addEventListener("keydown", handleCtrlP)

        return() => {
            document.removeEventListener("keydown", handleCtrlP)
        }
    }, [])
    return (
        <div className="roll-three">
            <div className="profile" onClick={(e) => {e.stopPropagation(); handleShowProfile()}}>
                <h4 title='Press Ctrl + P'>{selectedUser ? selectedUser.firstName : 'Guest'}</h4>
                <div className='small-profile-pic-box' title='Press Ctrl + P'>
                    <img src={selectedUser ? selectedUser.picture : require("../icons/prof.jpg").default} />
                </div>
                {showProfile ?
                    <ProfileBox
                        profileBoxRef={profileBoxRef}
                        toggleDarkMode={toggleDarkMode}
                        handleShowProfile={handleShowProfile}
                        handleSwitchUser={handleSwitchUser}
                        selectedUser={selectedUser}
                    />
                    : null}
            </div>
        </div>
    )
}

export default Profile