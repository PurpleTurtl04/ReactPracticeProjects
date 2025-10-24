import "./App.css";
import BackToTop from "./BackToTop";
import Counters from "./Counters";
import SearchBar from "./SearchBar";
import PokedexContainer from "./PokedexContainer";

function App() {
  return (
    <>
      <div className="container">
        <h1>Shiny Pokedex</h1>
      </div>
      <SearchBar />
      <Counters />
      <BackToTop />
      <PokedexContainer />
      {/* Pokemon Card */}
      {/* Image */}
      {/* Title */}
    </>
  );
}

export default App;
