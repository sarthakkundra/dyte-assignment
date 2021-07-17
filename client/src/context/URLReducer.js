import { AUTHENTICATE } from './types';

const reducer = (state, action) => {

    switch(action.type){

        case AUTHENTICATE:
            return{
                ...state,
                userId: action.payload,
                isAuthenticated: true
            }
        default:
            return state;
    }
}

export default reducer;