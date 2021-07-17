import { useReducer } from 'react'; 
import URLContext from './URLContext';
import URLReducer from './URLReducer';
import axios from 'axios';

import { AUTHENTICATE, DEAUTHENTICATE, GET_ALL_URLS, DELETE_URL } from './types';
const URLState = (props) => {

    const initialState = {
        userId: null,
        isAuthenticated: false,
        urls: []
    }

    const [state, dispatch] = useReducer(URLReducer, initialState);

    const authenticate = async (id, name) => {
        await axios.post('/authenticate', {id, name})
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

    const createUrl = async (url, id) => {
        await axios.post('/shorten', {fullURL: url, id})
    }

    const updateUrl = () => {}

    const deleteUrl = async (id) => {
        await axios.delete(`/myUrls/${id}`)
        dispatch({
            type: DELETE_URL,
            payload: id
        })
    }

    const getAllUrls = async (id) => {
        console.log(id);
        const urls = await axios.get(`/myUrls/${id}`);
        console.log(urls);
        dispatch({
            type: GET_ALL_URLS,
            payload: urls.data
        })
    }
    
    return(
        <URLContext.Provider value={{
            userId: state.userId,
            isAuthenticated: state.isAuthenticated,
            urls: state.urls,
            authenticate,
            deAuthenticate,
            createUrl,
            updateUrl,
            deleteUrl,
            getAllUrls
        }}
        >
        {props.children}
        </URLContext.Provider>
    )
}

export default URLState;