import logo from './logo.svg';
import './App.css';
import Item from './Item.js'
import { useState } from 'react';

function App() {
  const defaultItems = [
    {name: "bread"},
    {name: "soy milk"}
  ]
  const [items, setItems] = useState(defaultItems);
  const [itemNameInput, setItemNameInput] = useState("");

  const handleChange = (e) => {
    setItemNameInput(e.target.value);
  }

  const addItem = () => {
    setItems((prev) => [...prev, {name: itemNameInput}]);
    setItemNameInput("");
  }

  return (
    <div className="App">
      <header className="App-header">
        Shopping List
      </header>
      <div className="App-body">
        <div className="Item-list">
          {items.map((x) => {
              return <Item name={x.name}></Item>
            })
          }
        </div>
        <input onChange={handleChange}></input>
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
