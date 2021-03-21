import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AirportInfo from '../AirportInfo/AirportInfo';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import getData from '../../store/actions/airportActions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './AirportWeatherContainer.sass';

//AirportWeatherContainer contains all of the info on each of the four airports
const AirportWeatherContainer = (props) => {

    const dispatch = useDispatch();
    const airportName = useSelector(state => state.airportList.airports.name);
    const airportCode = useSelector(state => state.airportList.airports.code);
    const weatherLoaded = useSelector(state => state.weatherList.weather.report);

    useEffect(() => {
        dispatch(getData(props.name));
    }, [dispatch, props.name]);

    return (
        <div>
            {airportName && weatherLoaded &&
                <Container className="airport-container">
                    <Row>
                        <div className="airport-name">
                            <h1>{airportName}</h1>
                            <div>
                                <span className="bold-text">ICAO: </span>
                                {airportCode}
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Col md="7">
                            <AirportInfo />
                        </Col>
                        <Col md="5">
                            <WeatherInfo />
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    );   
}

export default AirportWeatherContainer;