import React from 'react'
import Input from '../Input'
import URLs from '../URLs'
import { Container } from "@chakra-ui/react";
const Profile = () => {

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
