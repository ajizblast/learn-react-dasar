import React, { useState } from "react";

function State() {
  //init State
  const [counter, setCounter] = useState(0);

  //Create Function Add
  function Add() {
    return setCounter(counter + 1);
  }

  //Create Function Less
  function Less() {
    return setCounter(counter - 1);
  }

  return (
    // Code Inside div
    <div>
      <p>
        If you click Add button, it will increase by one. But if you click Less
        button, it will decrease by one
      </p>

      <h1>{counter}</h1>

      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
    </div>
  );
}

export default State;
