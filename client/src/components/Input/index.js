import React, { useState, useContext } from 'react';
import { Input, Button, Center } from "@chakra-ui/react";
import URLContext from '../../context/URLContext';
const Index = () => {

    const [url, setUrl] = useState('')
    const UrlContext = useContext(URLContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        UrlContext.createUrl(url, UrlContext.userId);
    }
    return (
        <div>
             <Input onChange={(e) => setUrl(e.target.value)} placeholder="Enter Url to shorten" size="sm" />
             <Center>
             <Button style={buttonStyle} onClick={handleSubmit}>Shorten</Button>
             </Center>
        </div>
    )
}

const buttonStyle = {
    marginTop: "10px",
    marginBottom: "30px"
}
export default Index
