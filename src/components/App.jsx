import React, { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";
import TodoItem from "./TodoItem";

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

  function deleteItem(id) {
    setItems((prevItems) => {});
  }

  return (
    <div className="container">
      <Heading text="To-Do List" />
      <div className="form">
        <Input function={handleChange} type="text" value={input} />
        <Button function={addItems} />
      </div>
      <div className="items-container">
        <ul>
          {items.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                text={item}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
