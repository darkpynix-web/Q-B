import React from 'react';

import {$Header} from '../index';
const EmployeeList = ({users, handleOpenUserForm, onSelectOption}) => {
  return (
    <div>
      <$Header 
        iWantToControl={true}
        employeeheadercontrol={true}
        handleOpenUserForm={handleOpenUserForm}
        onSelectOption={onSelectOption}
      />
      <div className='item-lister'>
      <table>
        <thead>
          <tr>
            <th style={{ width: '100px' }}>User ID</th>
            <th>Fullname</th>
            <th style={{ width: '200px' }}>Login name</th>
            <th style={{ width: '200px' }}>Phone</th>
            <th style={{ width: '200px' }}>Security Group</th>
            <th style={{ width: '200px' }}>Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => 
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{user.uPhone}</td>
              <td>{user.securityGroup}</td>
              <td>
                <img src={user.picture}/>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default EmployeeList