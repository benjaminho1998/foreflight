import { GET_WEATHER, WEATHER_ERROR } from '../types';

const initialState = {
    weather: []
};

//Reducer for weather actions. All weather data is set to the weather array
export default (state = initialState, action) =>  {
    switch(action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weather: action.payload,
            };
        case WEATHER_ERROR:
            return {
                error: action.payload
            };
        default:
            return state;
    }
}