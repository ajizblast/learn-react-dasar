import React from "react";

function Event() {
  //Create function here
  function Greetings() {
    return alert("Guten Morgen!");
  }

  return (
    // Code Inside div
    <div>
      <p>If you press here, it will alert you using alert function</p>
      <button
        onClick={() => {
          alert("Selamat Pagi!");
        }}
      >
        Click Me
      </button>

      <p>If you press here, it will alert you using alert function</p>
      <button onClick={Greetings}>Click Me</button>
    </div>
  );
}

export default Event;
