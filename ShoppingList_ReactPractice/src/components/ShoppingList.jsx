import Item from "./Item";

export default function ShoppingList({ shoppingList }) {
  return (
    <ul>
      {shoppingList.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}
