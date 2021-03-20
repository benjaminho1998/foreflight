import React from 'react';

import { IoMdAirplane } from 'react-icons/io';

import './TopBar.sass';

//TopBar is the top bar of the app that has the main header and description
const TopBar = () => {
    return(
        <div className="top-bar">
            <h1 className="header">Airports</h1>
            <div className="top-desc-container">
                <IoMdAirplane /> 
                Find airport and weather data
            </div>
        </div>
    );
}

export default TopBar;