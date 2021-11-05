import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/SearchBar";
import {getPokemons, getPokemonData} from "./api";

const {useState, useEffect} = React;

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();

      const promises = data.results.map(async pokemon => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} />
    </div>
  )
}

export default App;
