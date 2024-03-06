import React from 'react'
import { Button } from './index'
import '../componentsSyles/HomeSearch.css'
const HeldReceiptSearch = ({ onChange, handleShowPreview, togglePreviewButtonName, handleUnhold}) => {
    return (
        <div className='held-list-search-botton-box'>
            <div className="search-holder">
                <input
                    type="search"
                    className='held-list-search'
                    onChange={onChange}
                    placeholder="Search Customer"
                />
                <i className='bx bx-search-alt-2' ></i>
            </div>
            <Button buttonName={togglePreviewButtonName} onClick={handleShowPreview}/>
            <Button  buttonName='Unhold'  onClick={handleUnhold}/>
        </div>
    )
}

export default HeldReceiptSearch