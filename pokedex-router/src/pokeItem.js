import React from 'react';

export default class PokeItem extends React.Component {
    render() {
        const { pokemonObject } =this.props;
    
        const { pokemon,
        type_1,
        hp,
        url_image
  } = pokemonObject;


return (
    <>
    { 
    <div>
        <p><img src={ url_image }/></p>
        <p>pokemon: { pokemon }</p>
        <p>type: { type_1 }</p>
        <p>hp: { hp }</p>
    </div>
    //not sure why this is red.
    }
    </>
    )
}
}
