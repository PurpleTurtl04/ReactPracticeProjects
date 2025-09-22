export default function Item({ item }) {
  return (
    <li>
      {item.name} ({item.quantity})
    </li>
  );
}
