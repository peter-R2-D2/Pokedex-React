import React from "react";

const Pokemon = (props) => {
  const {pokemon} = props;
  return (
    <div className='pokemon_card'>
      <div className='pokemon_content-img'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className='pokemon_content-id'>
        <h3>{pokemon.name}</h3>
        <p>{pokemon.id}</p>
      </div>
      <div className='pokemon_content-type'>
        <div>{pokemon.types[0].type.name}</div>
        <div></div>
      </div>
    </div>
  )
}

export default Pokemon
