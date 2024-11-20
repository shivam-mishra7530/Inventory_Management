import React from 'react';
import users from './UserList';
import { Link } from 'react-router-dom';
import './BelowNavbar.css';

const UsersComponent = () => {
  return (
    <div className='HomeComponent'>
      {users.map(user => (
        <Link to={`/allinone/${user.id}`} key={user.id} className='HomeComponentLink'>
          <div className='HomeComponentElement'>
            {user.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UsersComponent;













