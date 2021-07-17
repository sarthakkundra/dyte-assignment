import React, { cloneElement } from "react";
import { GoogleLogout } from "react-google-login";

const clientId = `213811319886-5rosiakatcgi6smukr7v9cte64t6upgg.apps.googleusercontent.com`;
const index = () => {
	const onSuccess = () => {
		console.log("Logged out!");
	};
	return (
		<div>
			<GoogleLogout
				clientId={clientId}
				buttonText='Logout'
				onLogoutSuccess={onSuccess}></GoogleLogout>
		</div>
	);
};

export default index;
