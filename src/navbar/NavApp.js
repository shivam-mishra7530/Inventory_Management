import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { About, Contact, Home, Services } from './pages';
import Navbar from './Navbar';


function NavApp() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        {/*Include HomeComponentApp here */}
     
      </Routes>
    </div>
  );
}

export default NavApp;

