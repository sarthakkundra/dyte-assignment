import { useContext } from "react";
import Homepage from "./components/Pages/Homepage";
import Profile from './components/Pages/Profile';
import Login from "./components/Login";
import Logout from "./components/Logout";
import URLContext from "./context/URLContext";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@chakra-ui/react";
function App() {
	const UrlContext = useContext(URLContext);
	const { isAuthenticated } = UrlContext;
	return (
		<Router>
			<Switch>
      <Route exact path='/profile'>
        {isAuthenticated ? <Profile /> : <Redirect to='/' />}
      </Route>
				<Route path='/'>
					<div>
						<Container>
							{isAuthenticated === true ? <Logout /> : <Login />}
							<Homepage />
						</Container>
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

/*
  1) Setup context
    i) for auth - DONE
    ii) for urls
  2) Homepage - DONE
  3) profile and URL creation page with all the personal URLs listed
  4) Protect route with auth state - DONE
*/
