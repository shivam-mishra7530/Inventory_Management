import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UsersComponent from './UsersComponent';
import users from './UserList';

import AllinOne from './allhomecomponent/Allinone';





const BelowNavbarApp = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UsersComponent />} />
        <Route path='/allinone/:id' element={<AllinOne  users={users}/>} />
      </Routes>
    
      
    </div>
  );
};

export default BelowNavbarApp;




