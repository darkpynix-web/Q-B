import React from 'react';
import './componentsSyles/ConfirmationDialog.css'
const ConfirmationDialog = ({ isOpen, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="confirmation-dialog">
      <div className="confirmation-holder">
        <div className="c-header">
          <p>Error</p>
          <button onClick={onCancel}>X</button>
        </div>

        <div className='c-body'>
          <span>!</span>
          <p>This item is already in the list</p>
        </div>
        <button className='buttons' onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;