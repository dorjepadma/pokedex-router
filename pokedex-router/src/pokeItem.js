import React, { Component } from 'react';

export default class PokeItem extends React.Component {
    render() {
        const { pokemon } =this.props;
        const {pokemon,
        type_1,
        hp,
        url_imag
  } = pokemon;

//   console.log(character)
return (
    <>
    { pokemon.name
    ? <div>
        <p><img src={ url_imag }/></p>
        <p>pokemon: { pokemon }</p>
        <p>type_1: { type_1 }</p>
        <p>status: { status }</p>
    </div>
    //not sure why this is red.
    }
    </>
    )
    }
}
