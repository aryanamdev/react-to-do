import React from "react";

export default function Button(props) {
  return (
    <button onClick={props.function}>
      <span>Add</span>
    </button>
  );
}
