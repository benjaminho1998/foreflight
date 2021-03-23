import { combineReducers } from 'redux';
import airportReducer from './airportReducer';
import weatherReducer from './weatherReducer';

//Combines the two reducers to be used in the store
export default combineReducers({
    airportList: airportReducer,
    weatherList: weatherReducer
});