import { useReducer } from 'react'; 
import URLContext from './URLContext';
import URLReducer from './URLReducer';

import { AUTHENTICATE, DEAUTHENTICATE } from './types';
const URLState = (props) => {

    const initialState = {
        userId: null,
        isAuthenticated: false,
        urls: []
    }

    const [state, dispatch] = useReducer(URLReducer, initialState);

    const authenticate = (id) => {
        dispatch({
            type: AUTHENTICATE,
            payload: id
        })
    }

    const deAuthenticate = () => {
        dispatch({
            type: DEAUTHENTICATE
        })
    }
    return(
        <URLContext.Provider value={{
            userId: state.userId,
            isAuthenticated: state.isAuthenticated,
            urls: state.urls,
            authenticate,
            deAuthenticate
        }}
        >
        {props.children}
        </URLContext.Provider>
    )
}

export default URLState;