import React from 'react';

import AirportWeatherContainer from '../AirportWeatherContainer/AirportWeatherContainer';

import { NavTab } from "react-router-tabs";
import { Switch, Route } from 'react-router-dom';

import "../../../node_modules/react-router-tabs/styles/react-router-tabs.css";

//If additional aiports need to be added, their codes and names just have to be placed in these arrays in corresponding order
const airportCodes = ["kaus", "50r", "egll", "khou"];
const airportNames = ["Austin-Bergstrom International (KAUS)", "Lockhart Municipal (50R)", "Heathrow (EGLL)", "William P Hobby (KHOU)"];

//Body contains the tabs which in turn contains the AirportContainer
//Passes the code to AirportWeatherContainer as a prop where the relevant data is then loaded in and used
const Body = () => {
    return (
        <div>
            {airportCodes.map((code, index) => 
                <NavTab to={"/" + code} key={index}>{airportNames[index]}</NavTab>
            )}
            <Switch>
                {airportCodes.map((code, index) => 
                    <Route key={index} path={"/"+ code} render={() => 
                        <AirportWeatherContainer name={code} />}   
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