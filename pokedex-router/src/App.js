import React, { Component } from 'react';
import {
    Route,
    Switch,
    Link,
    BrowserRouter as Router, }
    from 'react-router-dom';
import Header from './header.js';
import Detail from './details.js';
import Home from './home.js';
import About from './about.js';
import pokeball from './assets/pokeball.jpg';
import './App.css';


export default class App extends Component {
  render () {
    return (
      <Router>
      <Header pokeball={pokeball}/>
        <div>
          <h2>Pokemon search</h2>
          <Link to="/">Homepage</Link>
          <Link to="/about-me/about">About Me</Link>
          <Switch>
            <Route exact path="/:pokemon?" component={Home} />
            <Route exact path="/about-me/about" component={About}/>
            <Route path="/pokemon/:pokemon" component={Detail} />
          </Switch>

        </div>
      </Router>
    );
  }
}