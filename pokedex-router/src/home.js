import React, { Component } from 'react';
import request from 'superagent';
import PokeItem from './pokeItem.js';
import SearchBar from './searchbar.js';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = {
        searchQuery: this.props.match.params.pokemon,
        pokemon: [],
    }
   
    async componentDidMount() {
        if (this.props.match.params.pokemon) {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.pokemon}`)
            this.setState({ pokemon: data.body.results})
        }
    }
    handleSearch = async (e) => {
        e.preventDefault();

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.state.searchQuery}`)

        this.setState({
            pokemon:data.body.results, })

            this.props.history.push(this.state.searchQuery)
        
    }
    handleChange = async (e) => this.setState({ searchQuery: e.target.value })

    render() {
       
        return (
            <div className="App">
            <header className="App-header">
            <SearchBar
            searchQuery={this.state.searchQuery}
            handleSearch={this.handleSearch}
            handleChange={this.handleChange}
            />
            </header>
            <ul>
            { this.state.pokemon.map(pokemon=> 
            
                <Link to={`pokemon/${pokemon.pokemon}`}>
                <PokeItem pokemonObject={pokemon} />
                </Link>)
            }
            </ul>
            </div>
        );
    }
}