import { useReducer } from 'react'; 
import URLContext from './URLContext';
import URLReducer from './URLReducer';

import { AUTHENTICATE } from './types';
const URLState = (props) => {

    const initialState = {
        userId: null,
        isAuthenticated: false,
        urls: []
    }

    const [state, dispatch] = useReducer(URLReducer);

    const authenticate = (id) => {
        dispatch({
            type: AUTHENTICATE,
            payload: id
        })
    }
    return(
        <URLContext.Provider value={{
            userId: state.userId,
            isAuthenticated: state.isAuthenticated,
            urls: state.urls,
            authenticate
        }}
        >
        {props.children}
        </URLContext.Provider>
    )
}

export default URLState;