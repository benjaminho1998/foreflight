import React from 'react';

import AirportWeatherContainer from '../AirportWeatherContainer/AirportWeatherContainer';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './Body.sass';


//Body contains the tabs which in turn contains the AirportContainer
const Body = () => {
    return (
        <div>
            <Tabs defaultActiveKey="kaus" id="uncontrolled-tab-example">
                <Tab eventKey="kaus" title="Austin-Bergstrom International (KAUS)">
                    <AirportWeatherContainer name="kaus" />
                </Tab>
                <Tab eventKey="50R" title="Lockhart Municipal (50R)">
                    <AirportWeatherContainer name="50r" />
                </Tab>
                <Tab eventKey="egll" title="Heathrow (EGLL)">
                    <AirportWeatherContainer name="egll" />
                </Tab>
                <Tab eventKey="khou" title="William P Hobby (KHOU)">
                    <AirportWeatherContainer name="khou" />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Body;