import React from "react";

export default function Input(props) {
  return <input onChange={props.function} type={props.type} value={props.value} />;
}
