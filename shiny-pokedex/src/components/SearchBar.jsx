export default function SearchBar({ search, onSetSearch }) {
  return (
    <input
      type="text"
      name="searchBar"
      id="searchBar"
      placeholder="search for a pokemon"
      value={search}
      onChange={(e) => onSetSearch(e.target.value)}
    />
  );
}
