import React, { Component } from 'react';
import { getPokemon } from './api.js';
import { PokeItem } from './pokeItem.js';
//where is PokeItem used?

export default class Detail extends Component {
    state = { pokemon: {} }

    async componentDidMount () {
        const date = await getPokemon( this.props.match.params.pokemon);

        if (data.body.results) {
            this.setState({ pokemon: data.body.results[0] })
        }
    }
    render( {
        const { character } = this.state;

        return (
            <PokeItem pokemon= { pokemon } />
        );
    }
}