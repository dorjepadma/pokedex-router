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
    <div className="pokelist">
        {/* would this be the url for the css */}
        <p><img src={ url_image } alt= { pokemon }/></p>
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
