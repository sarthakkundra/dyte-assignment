import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Login from '../Login';
import Logout from '../Logout';
import URLContext from '../../context/URLContext';
import { HStack, Box } from '@chakra-ui/react';
const Index = () => {

    const UrlContext = useContext(URLContext);
    return (
        <>
        <HStack>
        <Box>{UrlContext.isAuthenticated ? <Logout /> : <Login />}</Box>
       <Box><Link to='/profile'>Profile</Link></Box>
       <Box><Link to='/'>Home</Link></Box>
       </HStack>
       </>
    )
}

export default Index
