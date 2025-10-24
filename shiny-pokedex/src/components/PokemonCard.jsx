export default function PokemonCard({ id, name, img }) {
  return (
    <li className="card">
      <img src={img} alt={name} className="card-image" />
      <h2 className="card-title">
        {id}. {name}
      </h2>
    </li>
  );
}
