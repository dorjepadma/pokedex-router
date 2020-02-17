import React, { Component } from 'react';
import Header from './header.js';
import Pokemon from './pokeList.js';
import pokeball from './assets/pokeball.jpg';
import request from 'superagent';
import './App.css';


export default class App extends Component {
  state = { selected: null,
          hp: null,
          type_1: null,
          pokemon: [] 
};  
     
async componentDidMount(){
  
const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
this.setState({ pokemon: data.body.results})
}

  render () {
    return (
      <>
      <Header pokeball={pokeball}/>
      <main>
      <Pokemon pokeArray={this.state.pokemon}/>
      </main>
      </>
    )
   
  }};
  
    
   
