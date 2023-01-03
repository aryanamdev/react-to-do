import React, { useState } from "react";

function App() {
  const [input, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function addItems() {
    if (!input) {
      return;
    } else {
      setItems((prevItems) => {
        return [...prevItems, input];
      });
      setInputText("");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div className="items-container">
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
