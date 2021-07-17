import React, { useState } from 'react';
import { Input, Button, Center } from "@chakra-ui/react";

const Index = () => {

    const [url, setUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(url);
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
