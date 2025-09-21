import "./App.css";

const shoppingList = [
  {
    id: 1,
    name: "Banana",
    quantity: 8,
    complete: false,
  },
  {
    id: 2,
    name: "Mangos",
    quantity: 2,
    complete: false,
  },
  {
    id: 3,
    name: "Bread",
    quantity: 1,
    complete: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <h1>Shopping List</h1>
        <div>
          <ul>
            {shoppingList.map((item) => (
              <li>
                {item.name} ({item.quantity})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
