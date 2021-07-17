import React, { useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import URLContext from '../../context/URLContext';

const clientId = `213811319886-5rosiakatcgi6smukr7v9cte64t6upgg.apps.googleusercontent.com`
const Index = () => {

    const UrlContext = useContext(URLContext);
    const { authenticate } = UrlContext;

    const onSuccess = (res) => {
        authenticate(res.profileObj.googleId, "Sarthak")
    }
    const onFailiure = () => {
        console.log("Login failed")
    }
    return (
        <div>
             <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailiure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />,
        </div>
    )
}

export default Index
