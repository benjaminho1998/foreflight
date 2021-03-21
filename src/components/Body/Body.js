import React from 'react';

import AirportWeatherContainer from '../AirportWeatherContainer/AirportWeatherContainer';

import { NavTab } from "react-router-tabs";
import { Switch, Route } from 'react-router-dom';

import "../../../node_modules/react-router-tabs/styles/react-router-tabs.css";

const airports = ["kaus", "50r", "egll", "khou"];

//Body contains the tabs which in turn contains the AirportContainer
const Body = () => {
    return (
        <div>
            <NavTab to="/kaus">Austin-Bergstrom International (KAUS)</NavTab>
            <NavTab to="/50r">Lockhart Municipal (50R)</NavTab>
            <NavTab to="/egll">Heathrow (EGLL)</NavTab>
            <NavTab to="/khou">William P Hobby (KHOU)</NavTab>
            <Switch>
                {airports.map((airport, index) => 
                    <Route key={index} path={"/"+ airport} render={() => 
                        <AirportWeatherContainer name={airport} />}   
                    />
                )}
                <Route path="/">
                    <AirportWeatherContainer name="kaus" />
                </Route>
            </Switch>
        </div>
    );
}

export default Body;