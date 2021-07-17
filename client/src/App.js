import { useContext } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import URLContext from './context/URLContext';
function App() {
  const UrlContext = useContext(URLContext);
  const { isAuthenticated } = UrlContext;
  return (
    <div className="App">
     <h1>URL Shortner</h1>
     {isAuthenticated  === true ? <Logout /> : <Login />}
    </div>
  );
}

export default App;

/*
  1) Setup context
    i) for auth - DONE
    ii) for urls
  2) Homepage
  3) profile and URL creation page with all the personal URLs listed
  4) Protect route with auth state
*/