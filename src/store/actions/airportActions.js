import { GET_AIRPORTS, AIRPORTS_ERROR, GET_WEATHER, WEATHER_ERROR } from '../types';
import axios from 'axios';

const getData = (code) => dispatch => {
    const airportUrl = "http://localhost:3000/airports/" + code + ".json";
    const weatherUrl = "http://localhost:3000/weather/" + code + ".json";
    axios.all([
        axios.get(airportUrl),
        axios.get(weatherUrl)
    ])
    .then(axios.spread((...res) => {
        dispatch({
            type: GET_AIRPORTS,
            payload: res[0].data
        });
        dispatch({
            type: GET_WEATHER,
            payload: res[1].data
        });
    }))
    .catch((err) => {
        dispatch({
            type: AIRPORTS_ERROR,
            payload: err
        });
        dispatch({
            type: WEATHER_ERROR,
            payload: err
        });
    });
} 

export default getData;