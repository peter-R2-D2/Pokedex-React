import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {

  const {pokemons} = props

  return (
    <div>
      <div className='pagination__conteiner'>
        <h1>Pokedex</h1>
        <div>pagination</div>
      </div>
      <div className='card'>
        {pokemons.map((pokemon) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />
        })}
      </div>
    </div>
  )
}

export default Pokedex
