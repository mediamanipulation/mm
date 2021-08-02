import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Development from './components/pages/Development';
import Art from './components/pages/Art';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/development' component={Development} />
          <Route path='/art' component={Art} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
