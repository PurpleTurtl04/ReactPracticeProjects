import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

export default function PokedexContainer() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=9`
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
        console.log(list);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // Eventually return an OL that maps through and creates li (cards)
  return (
    <ol className="pokedex">
      {pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          img={pokemon.img}
        />
      ))}
    </ol>
  );
}
