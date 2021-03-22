import { GET_AIRPORTS, AIRPORTS_ERROR } from '../types';

const initialState = {
    airports: []
};

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

