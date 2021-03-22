import { combineReducers } from 'redux';
import airportReducer from './airportReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
    airportList: airportReducer,
    weatherList: weatherReducer
});