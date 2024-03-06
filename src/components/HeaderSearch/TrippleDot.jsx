import React, { useState } from 'react'

const TrippleDot = ({ handleCustomerSelectOpen, handleAddCustomerFormAdd }) => {
    const [trippleDotMenu, setTrippleDotMenu] = useState(false);

    const handleTrippleDotMenu = () => {
        setTrippleDotMenu(!trippleDotMenu)
    }
    const handleTrippleDotMenuClear = () => {
        setTrippleDotMenu(false)
    }
    return (
        <div className='tripple-dot'>
            <i class='bx bx-dots-vertical-rounded' onClick={handleTrippleDotMenu}></i>
            {trippleDotMenu ?
                <div className="onClicked-menu" onClick={handleTrippleDotMenuClear} >
                    <div onClick={handleCustomerSelectOpen}>
                        <p>Select a customer</p>
                        <i class='bx bxs-user-check' ></i>
                    </div>
                    <div onClick={handleAddCustomerFormAdd}>
                       <p> Add new customer</p>
                       <i className='bx bx-plus'></i>
                    </div>
                </div> : null}
        </div>
    )
}

export default TrippleDot