
  //   App.js is the parent componenet 

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './components/pages/Login.css'
import './components/pages/Signup.css'
import './components/pages/Services.css'
import './components/Navbar.css'
import './components/Button.css'
import './components/Button'
//import './Signup.css';
//import './Login.css'
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/Signup';
import Login from './components/pages/Login';





function App() {
  return (
    <>
 
    
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
     
        </Switch>
      </Router>
    </>
  );
}

export default App;
