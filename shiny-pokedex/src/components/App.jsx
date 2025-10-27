import { useState, useEffect } from "react";

import "./App.css";
import BackToTop from "./BackToTop";
import Counters from "./Counters";
import SearchBar from "./SearchBar";
import PokedexContainer from "./PokedexContainer";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);

  // Call API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=905`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const list = result.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
            index + 1
          }.png`,
        }));
        setPokemonList(list);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter Pokemon
  useEffect(() => {
    if (search.length > 0) {
      setPokemon(
        pokemonList.filter(
          (pokemon) =>
            pokemon.id.toString().includes(search) ||
            pokemon.name.includes(search)
        )
      );
    } else {
      setPokemon(pokemonList);
    }
  }, [pokemonList, search]);

  return (
    <>
      <div className="container">
        <h1>Shiny Pokedex</h1>
      </div>
      <SearchBar search={search} onSetSearch={setSearch} />
      <Counters pokemon={pokemon} />
      <BackToTop />
      {loading && !error && <div className="loading">Loading...</div>}
      {!loading && error && <div className="error">Error: {error.message}</div>}
      {!loading && !error && <PokedexContainer pokemon={pokemon} />}
    </>
  );
}

export default App;
