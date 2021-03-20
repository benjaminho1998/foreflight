import { GET_WEATHER, WEATHER_ERROR } from '../types';

const initialState = {
    weather: []
};

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