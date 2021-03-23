import { GET_AIRPORTS, AIRPORTS_ERROR } from '../types';

const initialState = {
    airports: []
};

//Reducer for airport actions. All airport data is set to the airports array
export default (state = initialState, action) =>  {
    switch(action.type) {
        case GET_AIRPORTS:
            return {
                ...state,
                airports: action.payload,
            };
        case AIRPORTS_ERROR:
            return {
                error: action.payload
            };
        default:
            return state;
    }
}

