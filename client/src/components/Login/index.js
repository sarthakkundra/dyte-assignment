import React from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = `213811319886-5rosiakatcgi6smukr7v9cte64t6upgg.apps.googleusercontent.com`
const index = () => {

    const onSuccess = (res) => {
        console.log(res.profileObj)
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

export default index
