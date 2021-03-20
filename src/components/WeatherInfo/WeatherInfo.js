import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { VscLocation } from 'react-icons/vsc';

import './WeatherInfo.sass';

//WeatherInfo contains the information on the airport's surrounding weather
const WeatherInfo = (props) => {

    const imgName = props.city;

    //Lockhart doesn't have a current conditions object, so I treat the first forecast in its forecast array as the current conditions
    const weather = props.city === "Lockhart" ? props.data.report.forecast.conditions[0] : props.data.report.conditions;

    //Converts C to F
    const convertToF = (temp) => {
        return !temp ? "No temp data" : (9 * temp + (32 * 5))/5;
    }

    //Converts knots to mph
    const convertToMph = (knots) => {
        return knots * 1.151;
    }

    //Converts degrees to cardinal direction. From: https://stackoverflow.com/questions/7490660/converting-wind-direction-in-angles-to-text-words
    const getCardinalDirection = (num) => {
        const tmp = Math.trunc((num/22.5) + 0.5);
        const arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
        return arr[(tmp % 16)];
    }

    //Gets the single greatest coverage out of cloudLayers and cloudLayersV2. Abbreviation info from: https://en.wikipedia.org/wiki/METAR
    const getGreatestCloudCoverage = (clouds) => {
        const coverageValue = {
            "skc": 0,
            "clr": 1,
            "few": 2,
            "sct": 3,
            "bkn": 4,
            "ovc": 5
        }
        if(!clouds) {
            return "No cloud data"
        }
        let maxCoverage = -1;
        let maxClouds = "";
        clouds.forEach((cloud) => {
            if(cloud.coverage && (coverageValue[cloud.coverage] > maxCoverage)) {
                maxCoverage = coverageValue[cloud.coverage];
                maxClouds = cloud.coverage;
            }
        })

        switch(maxClouds) {
            case "skc":
                maxClouds = "Sky clear";
                break;
            case "clr":
                maxClouds = "No clouds below 12,000 feet";
                break;
            case "few":
                maxClouds = "Few clouds";
                break;
            case "sct":
                maxClouds = "Scattered clouds";
                break;
            case "bkn":
                maxClouds = "Broken clouds";
                break;
            case "ovc":
                maxClouds = "Overcast";
                break;
            default:
                maxClouds = "Vertical Visibility";
        }

        return maxClouds;
    }

    //Gets appropriate data points to display. Replace part with redux
    const tempF = convertToF(weather.tempC);
    const windMph = convertToMph(weather.wind.speedKts);
    const cloudCoverage = getGreatestCloudCoverage([...weather.cloudLayers, ...weather.cloudLayersV2]);
    const cardinalDirection = getCardinalDirection(weather.wind.direction);

    return (
        <div>
            <Card className="card-container" style={{ width: '100%' }}>
                <Card.Body className="spacing">
                    <Row>
                        <Col>
                            <h3>Weather</h3> 
                        </Col>  
                        <Col className="right-align">
                            <h3>
                                <VscLocation /> 
                                {props.city}
                            </h3>
                        </Col>  
                    </Row>
                </Card.Body>
                <Card.Img variant="top" src={require(`../../images/${imgName}.jpg`)} />
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
                            <ListGroup.Item>Relative humidity: {weather.relativeHumidity}%</ListGroup.Item>
                            <ListGroup.Item>Visibility: {weather.visibility.distanceSm} Statute miles</ListGroup.Item>
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