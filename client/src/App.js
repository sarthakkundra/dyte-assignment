import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
     <h1>URL Shortner</h1>
     <Login />
     <Logout />
    </div>
  );
}

export default App;

/*
  1) Setup context
    i) for auth
    ii) for urls
  2) Homepage
  3) profile and URL creation page with all the personal URLs listed
  4) Protect route with auth state
*/