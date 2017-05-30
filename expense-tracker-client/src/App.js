import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import InfoContainer from './components/InfoContainer'

import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/categories" component={InfoContainer} />
        <Route exact path="/about"  render={() =>  <h3> This is an app for people who like check-ledgers!</h3>}/>
      </div>
    );
  }
}

export default App;
