
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import users from '../UserList';

import './Allinone.css';

const AllinOne = () => {
  const { id } = useParams();
  const user = users.find(user => user.id === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className='AllinOneComponent'>
      <div className="heading"><h1>{user.name}</h1></div>
      <div className="subheading">
        <Link to={`/allinone/${user.id}/${user.firstOption}`}>{user.firstOption && <div className="option firstoption">{user.firstOption}</div>}</Link>
        <Link to={`/allinone/${user.id}/${user.secondOption}`}>{user.secondOption && <div className="option secondoption">{user.secondOption}</div>}</Link>
        <Link to={`/allinone/${user.id}/${user.thirdOption}`}>{user.thirdOption && <div className="option thirdoption">{user.thirdOption}</div>}</Link>
      </div>
    </div>
  );
};

export default AllinOne;
