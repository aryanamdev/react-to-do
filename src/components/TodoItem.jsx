import React, { useState } from "react";

export default function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((preValue) => {
      return !preValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}
