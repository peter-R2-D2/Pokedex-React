import React from "react";
import { searchPokemon } from "../api";
const {useState} = React

const Searchbar = () => {

const [search, setSearch] = useState('')
const [pokemon, setPokemon] = useState()

const onChange = evt => {
  setSearch(evt.target.value)
}

const onClick = async evt => {
  const data = await searchPokemon(search)
  setPokemon(data)
}

  return(
    <div>
      <div className="search__content">
        <input type="text" placeholder="Buscar pokemon..." className="search__input" onChange={onChange}/>
        <button type="submit" className="search__btn" onClick={onClick}>Buscar</button>
      </div>
      <div>
        {pokemon && 
          <article>
            <h2>{pokemon.name} - {pokemon.id}</h2>
            <img src={pokemon.sprites.front_default} alt='img pokemon' />
          </article>
        }
        
      </div>
    </div>
  )
}

export default Searchbar