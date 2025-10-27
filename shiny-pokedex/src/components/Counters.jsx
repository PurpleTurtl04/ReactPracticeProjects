export default function Counters({ pokemon }) {
  const displayedPokemon = pokemon.length;
  return (
    <div id="counters">
      <p id="charNum">Characters: 0</p>
      <p id="arrayLength">Displayed Pokemon: {displayedPokemon}</p>
    </div>
  );
}
