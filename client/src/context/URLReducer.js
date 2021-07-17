import { AUTHENTICATE, DEAUTHENTICATE, DELETE_URL, GET_ALL_URLS } from './types';

const reducer = (state, action) => {

    switch(action.type){

        case AUTHENTICATE:
            return{
                ...state,
                userId: action.payload,
                isAuthenticated: true
            }
        
        case DELETE_URL:
            return{
                ...state,
                urls: state.urls.filter((url) => url.shortURL !== action.payload)
            }
        case GET_ALL_URLS:
            return{
                ...state,
                urls: action.payload
            }
        case DEAUTHENTICATE:
            return{
                ...state,
                userId: null,
                isAuthenticated: false
            }
        default:
            return state;
    }
}

export default reducer;