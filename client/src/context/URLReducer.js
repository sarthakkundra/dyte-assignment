import { AUTHENTICATE, DEAUTHENTICATE } from './types';

const reducer = (state, action) => {

    switch(action.type){

        case AUTHENTICATE:
            return{
                ...state,
                userId: action.payload,
                isAuthenticated: true
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