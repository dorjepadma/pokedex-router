import React, { Component } from 'react';
import { getPokemon } from './api.js';
import PokeItem from './pokeItem.js';
//where is PokeItem used?

export default class Detail extends Component {
    state = { pokemon: {} }

    async componentDidMount () {
        const data = await getPokemon( this.props.match.params.pokemon);
        console.log(data)

        if (data.body.results) {
            this.setState({ pokemon: data.body.results[0] })
        }
    }
    render() {
        const { pokemon } = this.state;

        return (
            <PokeItem pokemonObject={pokemon} />
        );
    }
}