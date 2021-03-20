import React from 'react';

import AirportContainer from '../AirportContainer/AirportContainer';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './Body.sass';


//Body contains the tabs which in turn contains the AirportContainer
const Body = () => {
    return (
        <div>
            <Tabs defaultActiveKey="kaus" id="uncontrolled-tab-example">
                <Tab eventKey="kaus" title="Austin-Bergstrom International (KAUS)">
                    <AirportContainer name="kaus" />
                </Tab>
                <Tab eventKey="50R" title="Lockhart Municipal (50R)">
                    <AirportContainer name="50r" />
                </Tab>
                <Tab eventKey="egll" title="Heathrow (EGLL)">
                    <AirportContainer name="egll" />
                </Tab>
                <Tab eventKey="khou" title="William P Hobby (KHOU)">
                    <AirportContainer name="khou" />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Body;