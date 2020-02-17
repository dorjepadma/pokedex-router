import React, { Component } from 'react';
import {
    Route,
    Switch,
    Link,
    BrowserRouter as Router, }
    from 'react-router-dom';
import Header from './header.js';
// import Pokemon from './pokeList.js';
import Detail from './details.js';
import Home from './home.js';
import About from './about.js';
import pokeball from './assets/pokeball.jpg';

import request from 'superagent';
import './App.css';


export default class App extends Component {
  render () {
    return (
      <Router>
      <Header pokeball={pokeball}/>
        <div>
          <h2>Pokemon search</h2>
          <Link to="/">Homepage</Link>
          <Link to="/about-me/a">About Me</Link>
          <Switch>
            <Route exact path="/:pokemon?" component={Home} />
            <Route exact path="about-me/" Component={About}/>
            <Route exact path="/pokemon/:pokemon" component={Detail} />
          </Switch>

        </div>
      </Router>
    );
  }
}