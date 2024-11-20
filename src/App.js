import React from 'react';
import './App.css';
import './index.css';


import BelowNavbarApp from './belownavbar/BelowNavbarApp';
import NavApp from './navbar/NavApp';
import { AvailableItemsApp } from './belownavbar/allhomecomponent/AvailableItems';
import { TabButton } from './tabbutton/TabButton';



function App() {
  return (
    <div className="App">
      
        <NavApp />
        <BelowNavbarApp />
        <AvailableItemsApp />
        <TabButton />
      
    </div>
  );
}

export default App;


