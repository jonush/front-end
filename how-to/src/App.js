import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Guide from './components/content/Guide';

function App() {
  const [loggedIn, setLoggedIn ] = useState(false);

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/about' component={About} />
        <Route
          path='/login'
          render={() => (<Login
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />)}
        />
        <Route path='/signup' component={SignUp} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/projects/:id' component={Guide} />
      </Switch>
    </div>
  );
}

export default App;
