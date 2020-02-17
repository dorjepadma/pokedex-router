import React, { Component } from 'react';
import request from 'superagent';
import PokeItem from './pokeItem.js';
import SearchBar from './searchbar.js';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = {
        searchQuery: this.props.match.params.pokemon,
        characters: [],
    }

    async componentDidMount() {
        if (this.props.match.params.pokemon) {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.name}`)
            this.setState({ pokemon: data.body.results})
        }
    }
    handleSearch = async (e) => this.setState({ searchQuery: e.target.value })

    render() {
        return (
            <div className="App">
            <header className="App-header">
            <searchBar
            searchQuery={this.state.searchQuery}
            handleSearch={this.handleSearch}
            handleChange={this.handleChange}
            />
            </header>
            <ul>
            { this.state.characters.map(character => 
                <link to={`pokemon/${pokemon.name}`}>
                <PokemonItem pokemon={pokemon} />
                </link>)
            }
            </ul>
            </div>
        );
    }
}