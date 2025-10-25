import { useState, useEffect } from "react";

import "./App.css";
import BackToTop from "./BackToTop";
import Counters from "./Counters";
import SearchBar from "./SearchBar";
import PokedexContainer from "./PokedexContainer";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //   const [search, setSearch] = useState("");

  const displayedPokemon = pokemon.length;

  //   const searchedPokemon = pokemon.filter

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=51`
        ); // Replace with your API endpoint
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
        setPokemon(list);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();

    // Optional: Cleanup function for aborting fetch requests (important for preventing memory leaks)
    // const abortController = new AbortController();
    // fetch('https://api.example.com/data', { signal: abortController.signal });
    // return () => abortController.abort();
  }, []); // Empty dependency array ensures this effect runs only once on mount
  return (
    <>
      <div className="container">
        <h1>Shiny Pokedex</h1>
      </div>
      <SearchBar />
      <Counters displayedPokemon={displayedPokemon} />
      <BackToTop />
      {loading && !error && <div className="loading">Loading...</div>}
      {!loading && error && <div className="error">Error: {error.message}</div>}
      {!loading && !error && <PokedexContainer pokemon={pokemon} />}
    </>
  );
}

export default App;
