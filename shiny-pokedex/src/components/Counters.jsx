export default function Counters({ displayedPokemon }) {
  return (
    <div id="counters">
      <p id="charNum">Characters: 0</p>
      <p id="arrayLength">Displayed Pokemon: {displayedPokemon}</p>
    </div>
  );
}
