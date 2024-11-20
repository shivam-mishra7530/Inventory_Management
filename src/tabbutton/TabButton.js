import React, { useState } from 'react';
import TabButtonData from './TabButtonData';
import './TabButton.css';

export const TabButton = () => {

    const [OnSelect, setOnSelect] = useState("Component_One");

    function handleClick(afterClick) {
        setOnSelect(afterClick);
    }

    const showDetails = TabButtonData[OnSelect];


     
    return (
      <div className='main-container'>
        <div className='Container'>
            <div className='Head-Button'>
                <button onClick={() => handleClick("Component_One")}>Happy Customers</button>
                <button onClick={() => handleClick("Component_Two")}>Successfully Designed Homes</button>
                <button onClick={() => handleClick("Component_Three")}>City Spread</button>
            </div>
          
            {OnSelect ? (
  <div>
    <h1 className='Title'>{showDetails.title}</h1>
    <p className='Description'>{showDetails.description}</p>
  </div>
) : (
 null
)}


           {/* <h1 className='Title'>{showDetails.title}</h1>
            <p className='Description'>{showDetails.description}</p>*/}
        </div>
        </div>
    );
}
