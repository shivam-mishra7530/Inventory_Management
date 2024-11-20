

import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className='title'>LOGO</Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


