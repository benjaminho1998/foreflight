import React from 'react';

import AirportWeatherContainer from '../AirportWeatherContainer/AirportWeatherContainer';

import { NavTab } from "react-router-tabs";
import { Switch, Route } from 'react-router-dom';

import "../../../node_modules/react-router-tabs/styles/react-router-tabs.css";


//Body contains the tabs which in turn contains the AirportContainer
const Body = () => {
    return (
        <div>
            <NavTab to="/kaus">Austin-Bergstrom International (KAUS)</NavTab>
            <NavTab to="/50r">Lockhart Municipal (50R)</NavTab>
            <NavTab to="/egll">Heathrow (EGLL)</NavTab>
            <NavTab to="/khou">William P Hobby (KHOU)</NavTab>

            <Switch>
                <Route path="/kaus">
                    <AirportWeatherContainer name="kaus" />
                </Route>
                <Route path="/50r">
                    <AirportWeatherContainer name="50r" />
                </Route>
                <Route path="/egll">
                    <AirportWeatherContainer name="egll" />
                </Route>
                <Route path="/khou">
                    <AirportWeatherContainer name="khou" />
                </Route>
                <Route path="/">
                    <AirportWeatherContainer name="kaus" />
                </Route>
            </Switch>
        </div>
    );
}

export default Body;