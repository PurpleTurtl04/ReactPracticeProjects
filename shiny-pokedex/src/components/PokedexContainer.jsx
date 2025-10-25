import PokemonCard from "./PokemonCard";

export default function PokedexContainer({ pokemon }) {
  return (
    <ol id="pokedex">
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
