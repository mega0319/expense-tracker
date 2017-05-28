import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import NavBar from './components/NavBar'
import InfoContainer from './components/InfoContainer'
import ExpenseForm from './components/ExpenseForm'

import {Router, Link, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Route exact path="/categories" component={InfoContainer} />
        <Route exact path="/about"  render={() => <h1>This is an app to help people track their expenses</h1>}/>
      </div>
    );
  }
}

export default App;
