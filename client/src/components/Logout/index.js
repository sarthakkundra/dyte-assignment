import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import URLContext from '../../context/URLContext';
const clientId = `213811319886-5rosiakatcgi6smukr7v9cte64t6upgg.apps.googleusercontent.com`;

const Index = () => {
	const UrlContext = useContext(URLContext);

	const onSuccess = () => {
		UrlContext.deAuthenticate();
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

export default Index;
