import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

const shoppingListInit = [
  {
    id: 1,
    name: "Banana",
    quantity: 8,
    picked: false,
  },
  {
    id: 2,
    name: "Mangos",
    quantity: 2,
    picked: false,
  },
  {
    id: 3,
    name: "Bread",
    quantity: 1,
    picked: true,
  },
];

export default function App() {
  const [shoppingList, setShoppingList] = useState(shoppingListInit);

  function handleAddItem(item) {
    setShoppingList((list) => [...list, item]);
  }

  function handlePickedItem(id) {
    setShoppingList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, picked: !item.picked } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setShoppingList((list) => list.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header />
      <div className="container">
        <Form onAddItem={handleAddItem} />
        <ShoppingList
          shoppingList={shoppingList}
          onPickedItem={handlePickedItem}
          onDeleteItem={handleDeleteItem}
        />
      </div>
      <Footer shoppingList={shoppingList} />
    </>
  );
}
