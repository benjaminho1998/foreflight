import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { VscLocation } from 'react-icons/vsc';

import './WeatherInfo.sass';

import { convertToF, convertToMph, getCardinalDirection, getGreatestCloudCoverage } from './WeatherInfoHelper';

//WeatherInfo contains the information on the airport's surrounding weather
const WeatherInfo = () => {

    const city = useSelector(state => state.airportList.airports.city);

    const weatherInfo = useSelector(state => {
        if(state.weatherList.weather.report.conditions) {
            return state.weatherList.weather.report.conditions;
        }
        return state.weatherList.weather.report.forecast.conditions[0];
    }, shallowEqual);

    //Gets appropriate data points to display.
    const tempF = convertToF(weatherInfo.tempC);
    const windMph = convertToMph(weatherInfo.wind.speedKts);
    const cloudCoverage = getGreatestCloudCoverage([...weatherInfo.cloudLayers, ...weatherInfo.cloudLayersV2]);
    const cardinalDirection = getCardinalDirection(weatherInfo.wind.direction);
    const relativeHumidity = weatherInfo.relativeHumidity;
    const visibility = weatherInfo.visibility.distanceSm;

    return (
        <div>
            <Card className="card-container weather-bottom" style={{ width: '100%' }}>
                <Card.Body className="spacing">
                    <Row>
                        <Col lg="6">
                            <h3>Weather</h3> 
                        </Col>  
                        <Col lg="6" className="right-align">
                            <h3>
                                <VscLocation /> 
                                {city}
                            </h3>
                        </Col>  
                    </Row>
                </Card.Body>
                <Card.Img 
                    alt="View of the city" 
                    variant="top" 
                    src={require(`../../images/${city}.jpg`)}
                />
                <Card.Body className="spacing">
                    <Row>
                        <Col>
                            <div className="middle-align temp">
                                {tempF !== "No temp data" ?
                                    <span>{tempF}°F</span> :
                                    <span>{tempF}</span>
                                }
                            </div>
                            <div className="middle-align">
                                {cloudCoverage}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Relative humidity: {relativeHumidity}%</ListGroup.Item>
                                <ListGroup.Item>Visibility: {visibility} Statute miles</ListGroup.Item>
                                <ListGroup.Item>Wind speed: {windMph} mph</ListGroup.Item>
                                <ListGroup.Item>Wind direction: {cardinalDirection}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default WeatherInfo;