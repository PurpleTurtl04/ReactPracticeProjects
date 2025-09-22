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

  return (
    <>
      <div className="container">
        <Header />
        <Form onAddItem={handleAddItem} />
        <ShoppingList shoppingList={shoppingList} />
        <Footer shoppingList={shoppingList} />
      </div>
    </>
  );
}
