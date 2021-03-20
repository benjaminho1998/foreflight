import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AirportInfo from '../AirportInfo/AirportInfo';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import getData from '../../store/actions/airportActions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import './AirportWeatherContainer.sass';

//AirportWeatherContainer contains all of the info on each of the four airports
const AirportWeatherContainer = (props) => {

    const [data, setData] = useState({
        airport: null,
        weather: null
    });

    const dispatch = useDispatch();
    const airportData = useSelector(state => state.airportList.airports);
    console.log("AD", airportData);

    const stableDispatch = useCallback(dispatch, [])


    //Currently only loads in the data once so that it won't have to load everytime a user clicks on another tab. 
    //Could be implemented to do so if the data was actually dynamic and not static JSON.
    useEffect(() => {
        // const airportUrl = "http://localhost:3000/airports/" + props.name + ".json";
        // const weatherUrl = "http://localhost:3000/weather/" + props.name + ".json";

        // axios.all([
        //     axios.get(airportUrl),
        //     axios.get(weatherUrl)
        // ])
        // .then(axios.spread((...responses) => {
        //     console.log("hi", responses[0].data);
        //     console.log("asdf", responses[1].data);
        //     setData({
        //         airport: responses[0].data,
        //         weather: responses[1].data
        //     });
        // }))
        // .catch((error) => {
        //     console.log(error);
        // });
        dispatch(getData(props.name))

    }, [stableDispatch]); //***** ADDRESS THIS WARNING

    return (
        <div>
            {airportData  &&
                <Container className="airport-container">
                    <Row>
                        <div>
                            <h1>{airportData.name}</h1>
                            <div>
                                <span className="bold-text">ICAO: </span>
                                {airportData.code}
                            </div>
                        </div>
                    </Row>
                    {/* <Row>
                        <Col md="7">
                            <AirportInfo data={data.airport} />
                        </Col>
                        <Col md="5">
                            <WeatherInfo data={data.weather} city={data.airport.city} />
                        </Col>
                    </Row> */}
                </Container>
            }
        </div>
    );
        
}

export default AirportWeatherContainer;


// {data.airport && data.weather &&
//     <Container className="airport-container">
//         <Row>
//             <div>
//                 <h1>{data.airport.name}</h1>
//                 <div>
//                     <span className="bold-text">ICAO: </span>
//                     {data.airport.code}
//                 </div>
//             </div>
//         </Row>
//         <Row>
//             <Col md="7">
//                 <AirportInfo data={data.airport} />
//             </Col>
//             <Col md="5">
//                 <WeatherInfo data={data.weather} city={data.airport.city} />
//             </Col>
//         </Row>
//     </Container>
// }