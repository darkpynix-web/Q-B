import React, { useState, useEffect } from 'react'
import '../componentsSyles/AccountForm.css'
import PhoneInput from 'react-phone-number-input';
const AccountForm = ({ onAddNewUser, openUserForm, onAddAccountFormCancel }) => {
    const [id, setId] = useState(5);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [uPhone, setUPhone] = useState('');
    const [securityGroup, setSecurityGroup] = useState('');
    const [profilePicture, setProfilePicture] = useState(null)
    const [isAccountFormOpen, setIsAccountFormOpen] = useState(openUserForm);
    useEffect(() => {
        setIsAccountFormOpen(openUserForm)
    }, [openUserForm])
    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: id + 1,
            firstName: firstName,
            lastName: lastName,
            password: password,
            uPhone: uPhone,
            securityGroup: securityGroup,
            profilePicture: profilePicture
        }
        setId(id + 1)

        onAddNewUser(newUser)
        setFirstName('')
        setLastName('')
        setUPhone('')
        setSecurityGroup("")
        setPassword('')
        setProfilePicture(null)
    }
    const handleCancel = () => {
        setIsAccountFormOpen(true)
        onAddAccountFormCancel();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfilePicture(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }


    return (
        <>
            {isAccountFormOpen ? (
                <div className='add-user-form-holder'>
                    <div className="add-user-form">
                        <form action="addInventoryItem" onSubmit={handleSubmit}>
                            <label className='header-label' htmlFor="name">ADD USER <button onClick={handleCancel}>X</button></label>
                            <div className="box">
                                <div className="details-holder form-grid">
                                    <div className="input field">
                                        <label htmlFor="name"><p>First Name</p></label>
                                        <input
                                            type="text"
                                            id='name'
                                            value={firstName}
                                            placeholder='Enter Item Name'
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="password field">
                                        <label htmlFor="last-name" ><p>Last Name</p></label>
                                        <input
                                            type="text"
                                            id='last-name'
                                            placeholder='Enter last name'
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <div className="password field">
                                        <label htmlFor="password" id='password'><p>Password</p></label>
                                        <input
                                            type="password"
                                            id='password'
                                            placeholder='Enter password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="profile-selected form-grid">
                                    <img src={profilePicture} alt="Selected" />
                                    <label htmlFor='profile-picture'>Choose a profile picture</label>
                                    <input
                                        type="file"
                                        id='profile-picture'
                                        accept='image/*'
                                        onChange={handleImageChange}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                            </div>
                            <div className="remaining-details">
                                <input
                                    type="number"
                                    value={uPhone}
                                    onChange={(e) => setUPhone(e.target.value)}
                                    placeholder='Phone Number' />
                                <select value={securityGroup} onChange={(e) => setSecurityGroup(e.target.value)}>
                                    <option value="Cashier/Associate">Cashier/Associate</option>
                                    <option value="Administrator">Administrator</option>
                                    <option value="Owner">Owner</option>
                                </select>
                            </div>
                            <div className="loginbuttons form-grid">
                                <button onClick={handleCancel}>Cancel</button>
                                <button type='submit'>Save</button>
                            </div>
                            <div className="bottom"></div>
                        </form>
                    </div>
                </div>) : null}
        </>
    )
}

export default AccountForm