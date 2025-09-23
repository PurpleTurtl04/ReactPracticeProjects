import Item from "./Item";

export default function ShoppingList({
  shoppingList,
  onPickedItem,
  onDeleteItem,
}) {
  return (
    <div className="shoppingList">
      <ul>
        {shoppingList.map((item) => (
          <Item
            item={item}
            key={item.id}
            onPickedItem={onPickedItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
