import React from 'react';

import { useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table'

import './AirportInfo.sass';

//AirportInfo contains the information on the Airport itself
const AirportInfo = () => {

    const airportInfo = useSelector(state => state.airportList.airports);
    const imgName = airportInfo.code;
    const latitude = airportInfo.latitude;
    const longitude = airportInfo.longitude;
    const runways = airportInfo.runways;

    return (
        <div>
            <Row className="row-container">
                <Card className="card-container" style={{ width: '100%' }}>
                    <Card.Body>
                        <h3>Location</h3>
                        <ListGroup>
                            <ListGroup.Item>
                                <span className="bold-text">Latitude: </span>
                                {latitude}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className="bold-text">Longitude: </span>
                                {longitude}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Img 
                        alt="Google maps view of the airport" 
                        variant="top" 
                        className="round-bottom" 
                        src={require(`../../images/${imgName}.jpg`)} 
                    />
                </Card>
            </Row>
            <Row className="row-container">
                <Card className="card-container" style={{ width: '100%' }}>
                    <Card.Body>
                        <h3>Available Runways</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Length</th>
                                </tr>
                            </thead>
                            <tbody>
                                {runways.map((runway, index) => 
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{runway.name}</td>
                                        <td>{runway.length}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Row>
        </div>
        
    );
}

export default AirportInfo;