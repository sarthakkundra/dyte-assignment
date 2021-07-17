import React, { useEffect, useContext } from 'react'
import Input from '../Input'
import URLs from '../URLs'
import { Container } from "@chakra-ui/react";
import URLContext from '../../context/URLContext';
const Profile = () => {

    const UrlContext = useContext(URLContext);

    useEffect(() => {
        UrlContext.getAllUrls(UrlContext.userId);
    }, [])

    return (
        <div style={inputTable}>
        <Container maxW='container.xl'>
            <Input />
            <URLs />
            </Container>
        </div>
    )
}

const inputTable = {
    marginTop: "50px"
}

export default Profile
