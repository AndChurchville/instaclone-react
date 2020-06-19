import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Header from './components/Header';




function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>

      
    </>
  
  );
}

export default App;
